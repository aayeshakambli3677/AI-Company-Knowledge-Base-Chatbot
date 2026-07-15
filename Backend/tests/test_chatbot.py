import pytest
from app.ai.rag_pipeline import RAGPipeline


def test_rag_pipeline_creation():
    """
    Test whether the RAG Pipeline object is created successfully.
    """
    rag = RAGPipeline()
    assert rag is not None


def test_add_documents():
    """
    Test adding documents to the vector store.
    """
    rag = RAGPipeline()

    documents = [
        "Employees get 12 casual leaves every year.",
        "Office timing is 9:30 AM to 6:30 PM."
    ]

    rag.add_documents(documents)

    assert rag.vector_store.document_count() == 2


def test_answer_question():
    """
    Test chatbot answer generation.
    """
    rag = RAGPipeline()

    documents = [
        "Employees get 12 casual leaves every year.",
        "Office timing is 9:30 AM to 6:30 PM."
    ]

    rag.add_documents(documents)

    response = rag.answer_question(
        "How many casual leaves are allowed?"
    )

    assert response is not None
    assert isinstance(response, str)