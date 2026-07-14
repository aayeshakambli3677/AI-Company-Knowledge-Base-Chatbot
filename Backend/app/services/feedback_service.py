from app.models.feedback import Feedback


def create_feedback(db, feedback_data):

    feedback = Feedback(
        chat_id=feedback_data.chat_id,
        rating=feedback_data.rating,
        comment=feedback_data.comment
    )

    db.add(feedback)
    db.commit()
    db.refresh(feedback)

    return feedback


def get_all_feedback(db):
    return db.query(Feedback).all()


def get_feedback_by_id(db, feedback_id):
    return db.query(Feedback).filter(
        Feedback.id == feedback_id
    ).first()


def delete_feedback(db, feedback_id):

    feedback = db.query(Feedback).filter(
        Feedback.id == feedback_id
    ).first()

    if not feedback:
        return False

    db.delete(feedback)
    db.commit()

    return True