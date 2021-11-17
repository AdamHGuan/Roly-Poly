from .db import db


class Card(db.Model):
    __tablename__ = 'cards'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    frontContent = db.Column(db.Text, nullable=False)
    backContent = db.Column(db.Text, nullable=False)
    isPublic = db.Column(db.Boolean, nullable=False)



    user = db.relationship("User", back_populates="cards")
    card_images = db.relationship("Card_Image", back_populates="card_images")

    # decks = db.relationship(
    #     "Deck", 
    #     secondary=deck_card, 
    #     back_populates="cards"
    # )



    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'frontContent': self.frontContent,
            'backContent': self.backContent,
            'isPublic': self.isPublic,
        }
