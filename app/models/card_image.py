from .db import db

class Card_Image(db.Model):
    __tablename__ = 'card_images'

    id = db.Column(db.Integer, primary_key=True)
    cardId = db.Column(db.Integer, db.ForeignKey("cards.id"), nullable=False)
    url = db.Column(db.String(300), nullable=False)



    cards = db.relationship("Card", back_populates="card_images")



    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'url': self.url,
        }
