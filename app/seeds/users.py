from app.models import db, User


def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', profileImgUrl='https://www.pngfind.com/pngs/m/93-938050_png-file-transparent-white-user-icon-png-download.png')
    john = User(
        username='John', email='john@aa.io', password='password', profileImgUrl='https://www.pngfind.com/pngs/m/93-938050_png-file-transparent-white-user-icon-png-download.png')
    jenny = User(
        username='Jenny', email='jenny@aa.io', password='password', profileImgUrl='https://www.pngfind.com/pngs/m/93-938050_png-file-transparent-white-user-icon-png-download.png')

    db.session.add(demo)
    db.session.add(john)
    db.session.add(jenny)

    db.session.commit()



def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
