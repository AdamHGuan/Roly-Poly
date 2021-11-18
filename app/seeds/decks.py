from app.models import db, Deck


def seed_decks():
    deck_1 = Deck(
        userId='1', title='Tarot', isPublic=True, deckImgUrl='https://www.astrology.com/images-US/icons/icon-tarot-daily.svg')
    deck_2 = Deck(
        userId='1', title='JavaScript', isPublic=True, deckImgUrl='https://www.javascripttutorial.net/wp-content/uploads/2021/04/JavaScript-Tutorial.svg')
    deck_3 = Deck(
        userId='1', title='Python', isPublic=True, deckImgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png')
    deck_4 = Deck(
        userId='1', title='Test', isPublic=True, deckImgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png')



    db.session.add(deck_1)
    db.session.add(deck_2)
    db.session.add(deck_3)
    db.session.add(deck_4)


    db.session.commit()



def undo_decks():
    db.session.execute('TRUNCATE decks RESTART IDENTITY CASCADE;')
    db.session.commit()
