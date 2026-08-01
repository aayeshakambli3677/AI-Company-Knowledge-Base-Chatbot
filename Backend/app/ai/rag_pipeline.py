from app.ai.embedding_service import EmbeddingService
from app.ai.vector_store import VectorStore
from app.ai.llm_service import LLMService


class RAGPipeline:

    def __init__(self):
        self.embedding_service = None
        self.vector_store = VectorStore()
        self.llm_service = LLMService()

    def get_embedding_service(self):
        if self.embedding_service is None:
            self.embedding_service = EmbeddingService()
        return self.embedding_service

    def add_documents(
        self,
        documents,
        document_id
    ):

        embeddings = self.get_embedding_service().generate_embeddings(
            documents
        )

        self.vector_store.add_documents(
            documents,
            embeddings,
            document_id
        )

    def answer_question(self, question, document_id):

        question_embedding = (
            self.get_embedding_service()
            .generate_embedding(question)
        )

        relevant_docs = self.vector_store.search(
            question_embedding,
            top_k=3,
            document_id=document_id
        )

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