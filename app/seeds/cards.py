from app.models import db, Card


def seed_cards():
    card_1 = Card(
        userId='1', frontContent='card_1_front', backContent='card_1_back', isPublic=True)
    card_2 = Card(
        userId='1', frontContent='card_2_front', backContent='card_2_back', isPublic=True)
    card_3 = Card(
        userId='1', frontContent='card_3_front', backContent='card_3_back', isPublic=True)
    card_4 = Card(
        userId='1', frontContent='card_4_front', backContent='card_4_back', isPublic=True)
    card_5 = Card(
        userId='1', frontContent='card_5_front', backContent='card_5_back', isPublic=True)
    card_6 = Card(
        userId='1', frontContent='card_6_front', backContent='card_6_back', isPublic=True)
    card_7 = Card(
        userId='2', frontContent='card_7_front', backContent='card_7_back', isPublic=True)
    card_8 = Card(
        userId='3', frontContent='card_8_front', backContent='card_8_back', isPublic=False)


    db.session.add(card_1)
    db.session.add(card_2)
    db.session.add(card_3)
    db.session.add(card_4)
    db.session.add(card_5)
    db.session.add(card_6)
    db.session.add(card_7)
    db.session.add(card_8)

    db.session.commit()



def undo_cards():
    db.session.execute('TRUNCATE cards RESTART IDENTITY CASCADE;')
    db.session.commit()
