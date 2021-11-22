from flask import Blueprint, request
from app.models import Card, db
from flask_login import login_required, current_user

from app.forms import card_form



card_routes = Blueprint('cards', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@card_routes.route('/')
def user_cards():
    cards = Card.query.all()
    cards = Card.query.filter(Card.userId == current_user.id).all()
    return {'cards': [card.to_dict() for card in cards]}


@card_routes.route('/', methods=['POST'])
@login_required
def create_card():
  form = card_form()
  form["csrf_token"].data = request.cookies["csrf_token"]

  if form.validate_on_submit():
    card = Card(
      userId = request.json["userId"],
      frontContent=form.data['frontContent'],
      backContent=form.data['backContent'],
      isPublic=form.data['isPublic'],
      )

    db.session.add(card)
    db.session.commit()

    return card.to_dict()

  return {'errors': validation_errors_to_error_messages(form.errors)}, 401

    

@card_routes.route('/<int:cardId>', methods=['PATCH'])
@login_required
def edit_card(cardId):

  form = card_form()
  form["csrf_token"].data = request.cookies["csrf_token"]

  if form.validate_on_submit():
    card = Card.query.get(cardId)
    card.frontContent = form.data['frontContent']
    card.backContent = form.data['backContent']
    card.isPublic = form.data['isPublic']

    db.session.commit()

    return card.to_dict()

  return {'errors': validation_errors_to_error_messages(form.errors)}, 401




@card_routes.route('/<int:cardId>', methods=['DELETE'])
def delete_Card(cardId):

    card = Card.query.get(cardId)

    db.session.delete(card)
    db.session.commit()
    return 'Card deleted.'




