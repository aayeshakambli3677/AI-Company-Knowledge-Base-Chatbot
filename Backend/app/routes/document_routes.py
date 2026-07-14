from fastapi import (
    APIRouter,
    UploadFile,
    File,
    Form,
    Depends,
    HTTPException
)

from sqlalchemy.orm import Session

from app.database.db import get_db
from app.models.user import User

from app.middleware.auth_middleware import admin_required

from app.services.document_service import (
    save_document,
    get_all_documents,
    get_document_by_id,
    delete_document
)

router = APIRouter(
    prefix="/documents",
    tags=["Documents"]
)

@router.post("/upload")
def upload_document(
    title: str = Form(...),
    category_id: int = Form(...),
    file: UploadFile = File(...),
    current_user: User = Depends(admin_required),
    db: Session = Depends(get_db)
):

    document = save_document(
        db,
        title,
        category_id,
        current_user.id,
        file
    )

    if not document:
        raise HTTPException(
            status_code=400,
            detail="Only PDF and DOCX allowed"
        )

    return {
        "message": "Document uploaded successfully",
        "document_id": document.id
    }


@router.get("/")
def get_documents(
    db: Session = Depends(get_db)
):
    return get_all_documents(db)

@router.get("/{document_id}")
def get_document(
    document_id: int,
    db: Session = Depends(get_db)
):
    document = get_document_by_id(
        db,
        document_id
    )

    if not document:
        raise HTTPException(
            status_code=404,
            detail="Document not found"
        )

    return document

@router.delete("/{document_id}")
def delete_document_route(
    document_id: int,
    current_user: User = Depends(admin_required),
    db: Session = Depends(get_db)
):

    deleted = delete_document(
        db,
        document_id
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Document not found"
        )

    return {
        "message": "Document deleted successfully"
    }