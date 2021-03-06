from .db import db


class Deck(db.Model):
    __tablename__ = 'decks'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    title = db.Column(db.String(50), nullable=False)
    isPublic = db.Column(db.Boolean, nullable=False)
    deckImgUrl = db.Column(db.Text(), nullable=False)



    user = db.relationship("User", back_populates="decks")

    cards = db.relationship(
        "Card", 
        secondary="deck_card", 
        back_populates="decks"
    )


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'title': self.title,
            'isPublic': self.isPublic,
            'deckImgUrl': self.deckImgUrl,
        }
