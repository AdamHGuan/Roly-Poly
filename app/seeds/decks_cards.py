from app.models import db, Deck, Card

def seed_decks_cards():

    # decks_list = []
    # for i in range(1,5):
    #     deck = Decks.query.get(i)
    #     decks_list.append(deck)

    deck = Deck.query.get(1)

    for i in range(1,9):
        card = Card.query.get(i)
        deck.cards.append(card)
        db.session.add(deck)



    db.session.commit()



def undo_decks_cards():
    db.session.execute('TRUNCATE decks_cards RESTART IDENTITY CASCADE;')
    db.session.commit()

