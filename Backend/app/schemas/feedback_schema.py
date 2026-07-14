from pydantic import BaseModel
from typing import Optional

class FeedbackCreate(BaseModel):
    chat_id: int
    rating: int
    comment: Optional[str] = None