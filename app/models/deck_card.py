from .db import db


deck_card = db.Table('deck_card',
    db.Column('deckId', db.Integer, db.ForeignKey("decks.id"), primary_key=True),
    db.Column('cardId', db.Integer, db.ForeignKey("cards.id"), primary_key=True)
)

