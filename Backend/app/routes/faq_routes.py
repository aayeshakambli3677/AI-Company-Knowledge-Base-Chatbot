from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.db import get_db
from app.models.document import Document
from app.ai.faq_generator import FAQGenerator


router = APIRouter(
    prefix="/faq",
    tags=["FAQ"]
)


@router.post("/generate/{document_id}")
def generate_faq(
    document_id: int,
    db: Session = Depends(get_db)
):

    document = db.query(Document).filter(
        Document.id == document_id
    ).first()


    if not document:
        raise HTTPException(
            status_code=404,
            detail="Document not found"
        )


    faq_generator = FAQGenerator()

    faqs = faq_generator.generate_faqs(
        document.content
    )


    return {
        "document_id": document_id,
        "faqs": faqs
    }