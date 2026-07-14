from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.db import get_db

from app.models.user import User

from app.middleware.auth_middleware import (
    get_current_user,
    admin_required
)

from app.services.chatbot_service import (
    get_all_chats,
    get_chat_by_id,
    get_user_chat_history,
    delete_chat
)

router = APIRouter(
    prefix="/chats",
    tags=["Chats"]
)

@router.get("/history")
def chat_history(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):

    return get_user_chat_history(
        db,
        current_user.id
    )

@router.get("/")
def get_chats(
    current_user: User = Depends(admin_required),
    db: Session = Depends(get_db)
):

    return get_all_chats(db)

@router.get("/{chat_id}")
def get_chat(
    chat_id: int,
    current_user: User = Depends(admin_required),
    db: Session = Depends(get_db)
):

    chat = get_chat_by_id(
        db,
        chat_id
    )

    if not chat:
        raise HTTPException(
            status_code=404,
            detail="Chat not found"
        )

    return chat

@router.delete("/{chat_id}")
def remove_chat(
    chat_id: int,
    current_user: User = Depends(admin_required),
    db: Session = Depends(get_db)
):

    deleted = delete_chat(
        db,
        chat_id
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Chat not found"
        )

    return {
        "message": "Chat deleted successfully"
    }