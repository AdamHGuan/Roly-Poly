from flask import Blueprint, request
from app.models import Deck, db
from flask_login import login_required, current_user

from app.forms import deck_form



deck_routes = Blueprint('decks', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@deck_routes.route('/')
def user_decks():
    decks = Deck.query.all()
    decks = Deck.query.filter(Deck.userId == current_user.id).all()
    return {'decks': [deck.to_dict() for deck in decks]}




@deck_routes.route('/', methods=['POST'])
@login_required
def create_deck():
  form = deck_form()
  form["csrf_token"].data = request.cookies["csrf_token"]

  if form.validate_on_submit():
    deck = Deck(
      userId = request.json["userId"],
      title=form.data['title'],
      isPublic=form.data['isPublic'],
      deckImgUrl=form.data['deckImgUrl'],        )

    db.session.add(deck)
    db.session.commit()

    return deck.to_dict()

  return {'errors': validation_errors_to_error_messages(form.errors)}, 401

    

@deck_routes.route('/<int:deckId>', methods=['PATCH'])
@login_required
def edit_deck(deckId):

  form = deck_form()
  form["csrf_token"].data = request.cookies["csrf_token"]

  if form.validate_on_submit():
    deck = Deck.query.get(deckId)
    deck.title = form.data['title']
    deck.isPublic = form.data['isPublic']
    deck.deckImgUrl = form.data['deckImgUrl']

    db.session.commit()

    return deck.to_dict()

  return {'errors': validation_errors_to_error_messages(form.errors)}, 401




@deck_routes.route('/<int:deckId>', methods=['DELETE'])
def delete_Deck(deckId):

    deck = Deck.query.get(deckId)

    db.session.delete(deck)
    db.session.commit()
    return 'Deck deleted.'




