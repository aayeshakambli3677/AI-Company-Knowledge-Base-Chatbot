from app.models.category import Category


from app.models.category import Category

def create_category(db, category_data):

    existing_category = db.query(Category).filter(
        Category.name == category_data.name
    ).first()

    if existing_category:
        return None

    category = Category(
        name=category_data.name,
        description=category_data.description
    )

    db.add(category)
    db.commit()
    db.refresh(category)

    return category


def get_all_categories(db):
    return db.query(Category).all()


def get_category_by_id(db, category_id):
    return db.query(Category).filter(
        Category.id == category_id
    ).first()


def delete_category(db, category_id):

    category = db.query(Category).filter(
        Category.id == category_id
    ).first()

    if not category:
        return False

    db.delete(category)
    db.commit()

    return True