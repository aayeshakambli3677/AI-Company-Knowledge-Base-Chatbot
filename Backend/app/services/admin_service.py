from sqlalchemy.orm import Session

from app.models.user import User
from app.models.document import Document
from app.models.chat import Chat
from app.models.feedback import Feedback


def get_dashboard_stats(db: Session):

    total_users = db.query(User).count()

    total_documents = db.query(Document).count()

    total_chats = db.query(Chat).count()

    total_feedbacks = db.query(Feedback).count()

    return {
        "total_users": total_users,
        "total_documents": total_documents,
        "total_chats": total_chats,
        "total_feedbacks": total_feedbacks
    }