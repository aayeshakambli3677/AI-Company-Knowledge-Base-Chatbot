import pytest

from app.ai.embedding_service import EmbeddingService
from app.ai.vector_store import VectorStore


def test_embedding_service():
    """
    Test embedding generation.
    """
    embedding_service = EmbeddingService()

    embedding = embedding_service.generate_embedding(
        "What is the leave policy?"
    )

    assert embedding is not None
    assert isinstance(embedding, list)
    assert len(embedding) > 0


def test_vector_store():
    """
    Test adding and searching documents.
    """
    embedding_service = EmbeddingService()
    vector_store = VectorStore()

    documents = [
        "Employees receive 12 casual leaves every year.",
        "Office timing is 9:30 AM to 6:30 PM.",
        "Employees must wear ID cards."
    ]

    embeddings = embedding_service.generate_embeddings(documents)

    vector_store.add_documents(documents, embeddings)

    query = "Leave Policy"

    query_embedding = embedding_service.generate_embedding(query)

    results = vector_store.search(query_embedding)

    assert len(results) > 0
    assert isinstance(results, list)


def test_document_count():
    """
    Test document count.
    """
    embedding_service = EmbeddingService()
    vector_store = VectorStore()

    docs = [
        "Document One",
        "Document Two"
    ]

    embeddings = embedding_service.generate_embeddings(docs)

    vector_store.add_documents(docs, embeddings)

    assert vector_store.document_count() == 2