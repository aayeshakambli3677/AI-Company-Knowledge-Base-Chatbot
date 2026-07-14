from pydantic import BaseModel
from datetime import datetime

class DocumentResponse(BaseModel):
    id: int
    title: str
    file_name: str
    file_path: str
    upload_date: datetime

    class Config:
        from_attributes = True