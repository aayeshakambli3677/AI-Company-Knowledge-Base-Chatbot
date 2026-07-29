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

    def add_documents(
    self,
    documents,
    document_id
    ):
        embeddings = self.embedding_service.generate_embeddings(
        documents
    )
        self.vector_store.add_documents(
        documents,
        embeddings,
        document_id
    )

    def answer_question(self, question, document_id):
        """
        Generate an answer for the user's question.
        """

        # Create embedding for user question
        question_embedding = self.embedding_service.generate_embedding(question)

        # Retrieve relevant documents
        relevant_docs = self.vector_store.search(
            question_embedding,
            top_k=3,
            document_id=document_id
        )

        print("Retrieved Docs:", relevant_docs)

        # Combine retrieved documents
        context = "\n\n".join(relevant_docs)

        prompt = f"""
You are an AI Company Knowledge Base Assistant.

Use ONLY the information provided in the context.

If the answer is not present in the context, reply:
"I could not find that information in the uploaded company documents."

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