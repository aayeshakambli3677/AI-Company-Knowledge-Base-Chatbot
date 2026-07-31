from sqlalchemy.orm import Session

from app.models.user import User
from app.models.document import Document
from app.models.chat import Chat
from app.models.feedback import Feedback
from app.models.category import Category


def get_dashboard_stats(db: Session):

    total_users = db.query(User).count()

    total_documents = db.query(Document).count()

    total_chats = db.query(Chat).count()

    total_categories = db.query(Category).count()

    return {
        "users": total_users,
        "documents": total_documents,
        "chats": total_chats,
        "categories": total_categories
    }