from app.models import db, Card_Image


def seed_card_images():
    img_1 = Card_Image(
        cardId='1', url='http://www.astrology.com/images-US/tarot/major-arcana/fool.svg')
    img_2 = Card_Image(
        cardId='2', url='https://www.astrology.com/images-US/tarot/major-arcana/magician.svg')
    img_3 = Card_Image(
        cardId='3', url='https://www.astrology.com/images-US/tarot/major-arcana/high-priestess.svg')
    img_4 = Card_Image(
        cardId='4', url='https://www.astrology.com/images-US/tarot/major-arcana/empress.svg')
    img_5 = Card_Image(
        cardId='5', url='https://www.astrology.com/images-US/tarot/major-arcana/empress.svg')
    img_6 = Card_Image(
        cardId='6', url='https://www.astrology.com/images-US/tarot/major-arcana/emperor.svg')
    img_7 = Card_Image(
        cardId='7', url='https://www.astrology.com/images-US/tarot/major-arcana/hierophant.svg')
    img_8 = Card_Image(
        cardId='8', url='https://www.astrology.com/images-US/tarot/major-arcana/lovers.svg')


    db.session.add(img_1)
    db.session.add(img_2)
    db.session.add(img_3)
    db.session.add(img_4)
    db.session.add(img_5)
    db.session.add(img_6)
    db.session.add(img_7)
    db.session.add(img_8)


    db.session.commit()



def undo_card_images():
    db.session.execute('TRUNCATE card_images RESTART IDENTITY CASCADE;')
    db.session.commit()
