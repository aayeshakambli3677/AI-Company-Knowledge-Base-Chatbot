from fastapi import APIRouter, Depends, HTTPException

from app.middleware.auth_middleware import admin_required
from app.models.user import User

from sqlalchemy.orm import Session

from app.database.db import get_db

from app.services.admin_service import (
    get_dashboard_stats
)

from app.services.user_service import (
    get_all_users,
    get_user_by_id,
    delete_user
)

router = APIRouter(
    prefix="/admin",
    tags=["Admin"]
)

@router.get("/dashboard")
def admin_dashboard(
    current_user: User = Depends(admin_required)
):

    return {
        "message": "Welcome Admin",
        "admin": current_user.name
    }

@router.get("/stats")
def dashboard_stats(
    current_user: User = Depends(admin_required),
    db: Session = Depends(get_db)
):

    return get_dashboard_stats(db)

@router.get("/users")
def get_users(
    current_user: User = Depends(admin_required),
    db: Session = Depends(get_db)
):

    return get_all_users(db)

@router.get("/users/{user_id}")
def get_user(
    user_id: int,
    current_user: User = Depends(admin_required),
    db: Session = Depends(get_db)
):

    user = get_user_by_id(
        db,
        user_id
    )

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    return user

@router.delete("/users/{user_id}")
def remove_user(
    user_id: int,
    current_user: User = Depends(admin_required),
    db: Session = Depends(get_db)
):

    deleted = delete_user(
        db,
        user_id
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    return {
        "message": "User deleted successfully"
    }