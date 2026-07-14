from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.db import get_db

from app.middleware.auth_middleware import (
    get_current_user,
    admin_required
)

from app.schemas.feedback_schema import FeedbackCreate

from app.services.feedback_service import (
    create_feedback,
    get_all_feedback,
    get_feedback_by_id,
    delete_feedback
)

router = APIRouter(
    prefix="/feedback",
    tags=["Feedback"]
)

@router.post("/")
def add_feedback(
    feedback: FeedbackCreate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    return create_feedback(
        db,
        feedback
    )

@router.get("/")
def get_feedback_list(
    db: Session = Depends(get_db),
    current_user = Depends(admin_required)
):
    return get_all_feedback(db)

@router.get("/{feedback_id}")
def get_feedback(
    feedback_id: int,
    db: Session = Depends(get_db),
    current_user = Depends(admin_required)
):

    feedback = get_feedback_by_id(
        db,
        feedback_id
    )

    if not feedback:
        raise HTTPException(
            status_code=404,
            detail="Feedback not found"
        )

    return feedback

@router.delete("/{feedback_id}")
def remove_feedback(
    feedback_id: int,
    db: Session = Depends(get_db),
    current_user = Depends(admin_required)
):

    deleted = delete_feedback(
        db,
        feedback_id
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Feedback not found"
        )

    return {
        "message": "Feedback deleted successfully"
    }