from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, TextAreaField, 
from wtforms.validators import DataRequired, Length, NumberRange


class Form(FlaskForm):
    address = StringField('Address', validators=[DataRequired("Please provide the title of your deck."), Length(-1, 50, "Title must be under 50 characters.")])
    isPublic = BooleanField('IsPublic', validators=[DataRequired("Will be deck be public?")])
    deckImgUrl = TextAreaField('DeckImgUrl', validators=[DataRequired("Please provide the deck image url.")])



