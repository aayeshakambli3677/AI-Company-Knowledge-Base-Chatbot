import os
import shutil

from sqlalchemy.orm import Session
from app.utils.document_parser import extract_text
from app.ai.rag_instance import rag
from app.models.document import Document


def save_document(
    db: Session,
    title: str,
    category_id: int,
    uploaded_by: int,
    file
):
    
    file_name = file.filename

    if file_name.endswith(".pdf"):
        folder = "app/uploads/pdfs"
    elif file_name.endswith(".docx"):
        folder = "app/uploads/docs"
    else:
        return None

    os.makedirs(folder, exist_ok=True)

    file_path = os.path.join(
        folder,
        file_name
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    document = Document(
        title=title,
        file_name=file_name,
        file_path=file_path,
        category_id=category_id,
        uploaded_by=uploaded_by
    )

    db.add(document)
    db.commit()
    db.refresh(document)
    text = extract_text(file_path)
    print("EXTRACTED TEXT:")
    print(text[:1000])

    chunks = [
    text[i:i+500]
    for i in range(0, len(text), 500)
    ]
    rag.add_documents(chunks,document.id)
    print("Chunks:", len(chunks))
    return document

def get_all_documents(db):
    return db.query(Document).all()

def get_document_by_id(db, document_id):
    return db.query(Document).filter(
        Document.id == document_id
    ).first()

import os

def delete_document(
    db,
    document_id
):
    
    document = db.query(Document).filter(
        Document.id == document_id
    ).first()

    if not document:
        return False

    if os.path.exists(document.file_path):
        os.remove(document.file_path)

    db.delete(document)
    db.commit()

    return True