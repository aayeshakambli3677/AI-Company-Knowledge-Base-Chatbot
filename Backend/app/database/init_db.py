from app.database.db import engine
from app.database.base import Base

from app.models.user import User
from app.models.document import Document
from app.models.category import Category
from app.models.chat import Chat
from app.models.feedback import Feedback

Base.metadata.create_all(bind=engine)

print("All tables created successfully!")