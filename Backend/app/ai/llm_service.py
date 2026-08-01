import os
from abc import ABC, abstractmethod
from dotenv import load_dotenv
import google.generativeai as genai

# Load .env file
load_dotenv()


class BaseLLMService(ABC):

    @abstractmethod
    def generate_response(self, prompt: str) -> str:
        pass


class LLMService(BaseLLMService):

    def __init__(self):
        api_key = os.getenv("GEMINI_API_KEY")

        if not api_key:
            raise Exception("GEMINI_API_KEY not found in environment variables")

        genai.configure(api_key=api_key)

        self.model = genai.GenerativeModel(
            "gemini-2.5-flash"
        )

    def generate_response(self, prompt: str) -> str:
        try:
            response = self.model.generate_content(prompt)
            return response.text

        except Exception as e:
            print("Gemini Error:", e)

            return """
            Demo Mode Response:
            According to the uploaded company documents, employees are entitled to company benefits and should follow organizational policies.
            """