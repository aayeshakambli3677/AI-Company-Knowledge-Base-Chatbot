from typing import List
from app.ai.llm_service import LLMService


class FAQGenerator:
    """
    Generates FAQs from company documents using an LLM.
    """

    def __init__(self):
        self.llm = LLMService()

    def generate_faqs(self, document_text: str) -> List[dict]:
        """
        Generate FAQs from the given document text.

        Args:
            document_text (str): Company document text.

        Returns:
            List[dict]: List of FAQs.
        """

        prompt = f"""
You are an AI assistant.

Read the following company document and generate 10 important FAQs.

Return the output in this format only:

Q: Question 1
A: Answer 1

Q: Question 2
A: Answer 2

Company Document:
{document_text}
"""

        response = self.llm.generate_response(prompt)

        faqs = []
        current_question = None

        for line in response.splitlines():
            line = line.strip()

            if line.startswith("Q:"):
                current_question = line.replace("Q:", "").strip()

            elif line.startswith("A:") and current_question:
                answer = line.replace("A:", "").strip()
                faqs.append({
                    "question": current_question,
                    "answer": answer
                })
                current_question = None

        return faqs


# -------------------------
# Example Usage
# -------------------------
if __name__ == "__main__":
    sample_document = """
    Employees are entitled to 12 casual leaves every year.
    Office timings are from 9:30 AM to 6:30 PM.
    Employees can apply for leave using the HR Portal.
    """

    faq_generator = FAQGenerator()

    faqs = faq_generator.generate_faqs(sample_document)

    for faq in faqs:
        print(f"Q: {faq['question']}")
        print(f"A: {faq['answer']}")
        print("-" * 50)