from app.ai.llm_service import LLMService
from app.database.db import SessionLocal
from app.models.document import Document


class RAGPipeline:

    def __init__(self):
        self.llm_service = None

    def get_llm_service(self):
        if self.llm_service is None:
            self.llm_service = LLMService()

        return self.llm_service

    def add_documents(
        self,
        documents,
        document_id
    ):
        pass

    def answer_question(
        self,
        question,
        document_id
    ):

        db = SessionLocal()

        document = db.query(Document).filter(
            Document.id == document_id
        ).first()

        if not document:
            return "Document not found."

        context = document.content or ""

        prompt = f"""
You are an AI Company Knowledge Base Assistant.

Use ONLY the information provided in the document.

If the answer is not present in the document, reply:
"I could not find that information in the uploaded company document."

Document Content:
{context}

Question:
{question}

Answer:
"""

        answer = self.get_llm_service().generate_response(
            prompt
        )

        db.close()

        return answer