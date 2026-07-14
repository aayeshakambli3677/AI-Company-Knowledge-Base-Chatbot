from app.models.chat import Chat


def get_all_chats(db):
    return db.query(Chat).all()


def get_chat_by_id(db, chat_id):
    return db.query(Chat).filter(
        Chat.id == chat_id
    ).first()


def get_user_chat_history(db, user_id):
    return db.query(Chat).filter(
        Chat.user_id == user_id
    ).all()


from app.models.feedback import Feedback

def delete_chat(db, chat_id):

    chat = db.query(Chat).filter(
        Chat.id == chat_id
    ).first()

    if not chat:
        return False

    db.query(Feedback).filter(
        Feedback.chat_id == chat_id
    ).delete()

    db.delete(chat)
    db.commit()

    return True