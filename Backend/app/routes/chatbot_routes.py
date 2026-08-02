from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.db import get_db

from app.models.user import User
from app.models.chat import Chat

from app.schemas.chat_schema import ChatRequest
from app.ai.rag_instance import get_rag

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


# @router.post("/ask")
# def ask_question(
#     payload: ChatRequest,
#     current_user: User = Depends(get_current_user),
#     db: Session = Depends(get_db)
# ):

#     try:

#         print("CHAT REQUEST RECEIVED:", payload.question)

#         print("CHATBOT TEST MODE")
#         answer = "Chatbot route is working"
#         print("TEST ANSWER GENERATED")


#         chat = Chat(
#             user_id=current_user.id,
#             question=payload.question,
#             answer=answer
#         )

#         db.add(chat)
#         db.commit()
#         db.refresh(chat)


#         return {
#             "answer": answer
#         }

@router.post("/ask")
def ask_question(
    payload: ChatRequest,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):

    print("CHAT REQUEST RECEIVED")

    return {
        "answer": "CHATBOT TEST SUCCESS"
    }


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