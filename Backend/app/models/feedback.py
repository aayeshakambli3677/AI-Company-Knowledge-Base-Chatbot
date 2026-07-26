from sqlalchemy import Column, Integer, String, ForeignKey
from app.database.base import Base


class Feedback(Base):
    __tablename__ = "feedback"

    id = Column(Integer, primary_key=True, index=True)
    chat_id = Column(Integer, ForeignKey("chats.id"), nullable=False)
    rating = Column(Integer, nullable=False)
    comment = Column(String(500), nullable=True)