from app.models.user import User


def get_all_users(db):
    return db.query(User).all()


def get_user_by_id(db, user_id):
    return db.query(User).filter(
        User.id == user_id
    ).first()


def delete_user(db, user_id):

    user = db.query(User).filter(
        User.id == user_id
    ).first()

    if not user:
        return False

    db.delete(user)
    db.commit()

    return True