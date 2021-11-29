from typing import Text
from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Length


class deck_form(FlaskForm):
    title = StringField('Title', validators=[DataRequired("Please provide the title of your deck."), Length(-1, 50, "Title must be under 50 characters.")])
    isPublic = BooleanField('IsPublic')
    deckImgUrl = TextAreaField('DeckImgUrl', validators=[DataRequired("Please provide the deck image url."), Length(5,600, "URL must be above 5 characters.")])


    submit = SubmitField('Add Deck')

