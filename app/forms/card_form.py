from typing import Text
from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Length


class card_form(FlaskForm):
    frontContent = TextAreaField('frontContent', validators=[DataRequired("Please provide information for the front side of your card.")])
    backContent = TextAreaField('backContent', validators=[DataRequired("Please provide information for the back side of your card.")])
    isPublic = BooleanField('IsPublic')


    submit = SubmitField('Add Card')

