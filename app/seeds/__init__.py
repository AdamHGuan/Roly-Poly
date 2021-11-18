from flask.cli import AppGroup
from .users import seed_users, undo_users
from .decks import seed_decks, undo_decks
from .cards import seed_cards, undo_cards
from .card_images import seed_card_images, undo_card_images
from .decks_cards import seed_decks_cards, undo_decks_cards



# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_decks()
    seed_cards()
    seed_card_images()
    seed_decks_cards()
    # Add other seed functions here



# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_decks()
    undo_cards()
    undo_card_images()
    undo_decks_cards()
    # Add other undo functions here
