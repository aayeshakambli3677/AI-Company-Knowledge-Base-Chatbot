from sentence_transformers import SentenceTransformer
from typing import List
import logging


class EmbeddingService:
    """
    Service for generating text embeddings using Sentence Transformers.
    """

    def __init__(self, model_name: str = "all-MiniLM-L6-v2"):
        try:
            self.model = SentenceTransformer(model_name)
            logging.info(f"Embedding model '{model_name}' loaded successfully.")
        except Exception as e:
            logging.error(f"Failed to load embedding model: {e}")
            raise

    def generate_embedding(self, text: str) -> List[float]:
        """
        Generate embedding for a single text.

        Args:
            text (str): Input text.

        Returns:
            List[float]: Embedding vector.
        """
        if not text or not text.strip():
            raise ValueError("Input text cannot be empty.")

        embedding = self.model.encode(text, convert_to_numpy=True)
        return embedding.tolist()

    def generate_embeddings(self, texts: List[str]) -> List[List[float]]:
        """
        Generate embeddings for multiple texts.

        Args:
            texts (List[str]): List of input texts.

        Returns:
            List[List[float]]: List of embedding vectors.
        """
        if not texts:
            return []

        embeddings = self.model.encode(texts, convert_to_numpy=True)
        return embeddings.tolist()


# -------------------------------
# Example Usage
# -------------------------------
if __name__ == "__main__":
    embedding_service = EmbeddingService()

    sample_text = "What is the company's leave policy?"

    embedding = embedding_service.generate_embedding(sample_text)

    print("Embedding Dimension:", len(embedding))
    print("First 10 Values:", embedding[:10])