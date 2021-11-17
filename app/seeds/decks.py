from app.models import db, Deck


# Adds a demo user, you can add other users here if you want
def seed_decks():
    deck_1 = Deck(
        userId='1', title='JavaScript', isPublic=True, deckImgUrl='https://www.javascripttutorial.net/wp-content/uploads/2021/04/JavaScript-Tutorial.svg')
    deck_2 = Deck(
        userId='1', title='Python', isPublic=True, deckImgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png')
    deck_3 = Deck(
        userId='1', title='Test', isPublic=True, deckImgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png')



    db.session.add(deck_1)
    db.session.add(deck_2)
    db.session.add(deck_3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_decks():
    db.session.execute('TRUNCATE decks RESTART IDENTITY CASCADE;')
    db.session.commit()
