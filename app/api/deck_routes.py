from flask import Blueprint, request
from app.models import Deck, db
from flask_login import login_required

from app.forms import new_deck_form



deck_routes = Blueprint('decks', __name__)


@deck_routes.route('/')
def all_decks():
    decks = Deck.query.all()
    return {'decks': [deck.to_dict() for deck in decks]}




@deck_routes.route('/', methods=['POST'])
@login_required
def create_deck():

  form = new_deck_form()
  form["csrf_token"].data = request.cookies["csrf_token"]

  if form.validate_on_submit():
    new_deck = Deck(
        userId = request.json["userId"],
        title=form.data['title'],
        isPublic=form.data['isPublic'],
        deckImgUrl=form.data['deckImgUrl'],
        )

    db.session.add(new_deck)
    db.session.commit()

    return new_deck.to_dict()

  else:
    return form.errors




