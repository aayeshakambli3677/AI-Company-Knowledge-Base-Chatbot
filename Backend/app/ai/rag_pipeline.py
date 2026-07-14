from app.ai.embedding_service import EmbeddingService
from app.ai.vector_store import VectorStore
from app.ai.llm_service import LLMService


class RAGPipeline:
    """
    Retrieval-Augmented Generation (RAG) Pipeline
    """

    def __init__(self):
        self.embedding_service = EmbeddingService()
        self.vector_store = VectorStore()
        self.llm_service = LLMService()

    def add_documents(self, documents):
        """
        Add documents to the vector database.
        """
        for doc in documents:
            embedding = self.embedding_service.generate_embedding(doc)
            self.vector_store.add_document(doc, embedding)

    def answer_question(self, question):
        """
        Generate an answer for the user's question.
        """

        # Create embedding for user question
        question_embedding = self.embedding_service.generate_embedding(question)

        # Retrieve relevant documents
        relevant_docs = self.vector_store.search(question_embedding, top_k=3)

        # Combine retrieved documents
        context = "\n\n".join(relevant_docs)

        prompt = f"""
You are an AI Company Knowledge Base Assistant.

Answer the user's question only using the context below.

Context:
{context}

Question:
{question}

Answer:
"""

        answer = self.llm_service.generate_response(prompt)

        return answer


# -----------------------------
# Example Usage
# -----------------------------
if __name__ == "__main__":

    rag = RAGPipeline()

    documents = [
        "Employees receive 12 casual leaves every year.",
        "Office timing is 9:30 AM to 6:30 PM.",
        "Employees must wear ID cards inside the office."
    ]

    rag.add_documents(documents)

    question = "How many casual leaves are allowed?"

    response = rag.answer_question(question)

    print(response)