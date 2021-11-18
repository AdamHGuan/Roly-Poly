from flask import Blueprint, request
from app.models import Deck, db
from flask_login import login_required

from app.forms import deck_form



deck_routes = Blueprint('decks', __name__)


@deck_routes.route('/user/<int:userId>/')
def user_decks():
    decks = Deck.query.all()
    decks = Deck.query.filter(Deck.userId == userId).all()
    return {'decks': [deck.to_dict() for deck in decks]}




@deck_routes.route('/user/<int:userId>/', methods=['POST'])
@login_required
def create_deck():

  form = deck_form()
  form["csrf_token"].data = request.cookies["csrf_token"]

  if form.validate_on_submit():
    deck = Deck(
        userId = request.json["userId"],
        title=form.data['title'],
        isPublic=form.data['isPublic'],
        deckImgUrl=form.data['deckImgUrl'],
        )

    db.session.add(deck)
    db.session.commit()

    return deck.to_dict()

  else:
    return form.errors

    

@deck_routes.route('/<int:deckId>', methods=['PATCH'])
@login_required
def create_deck(deckId):

  form = deck_form()
  form["csrf_token"].data = request.cookies["csrf_token"]

  if form.validate_on_submit():
    deck = Deck.query.get(deckId)
    deck.title = form.data['title']
    deck.isPublic = form.data['isPublic']
    deck.deckImgUrl = form.data['deckImgUrl']

    db.session.commit()

    return deck.to_dict()

  else:
    return form.errors



@deck_routes.route('/<int:deckId>', methods=['DELETE'])
def delete_Deck(deckId):

    deck = Deck.query.get(deckId)

    db.session.delete(deck)
    db.session.commit()
    return 'Deck deleted.'




