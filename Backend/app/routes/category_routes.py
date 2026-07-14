from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.db import get_db

from app.middleware.auth_middleware import admin_required

from app.schemas.category_schema import CategoryCreate

from app.services.category_service import (
    create_category,
    get_all_categories,
    get_category_by_id,
    delete_category
)

router = APIRouter(
    prefix="/categories",
    tags=["Categories"]
)

@router.post("/")
def add_category(
    category: CategoryCreate,
    db: Session = Depends(get_db),
    current_user = Depends(admin_required)
):

    created_category = create_category(
        db,
        category
    )

    if not created_category:
        raise HTTPException(
            status_code=400,
            detail="Category already exists"
        )

    return created_category


@router.get("/")
def get_categories(
    db: Session = Depends(get_db)
):
    return get_all_categories(db)


@router.get("/{category_id}")
def get_category(
    category_id: int,
    db: Session = Depends(get_db)
):

    category = get_category_by_id(
        db,
        category_id
    )

    if not category:
        raise HTTPException(
            status_code=404,
            detail="Category not found"
        )

    return category


@router.delete("/{category_id}")
def remove_category(
    category_id: int,
    db: Session = Depends(get_db),
    current_user = Depends(admin_required)
):

    deleted = delete_category(
        db,
        category_id
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Category not found"
        )

    return {
        "message": "Category deleted successfully"
    }