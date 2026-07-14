from app.ai.embedding_service import EmbeddingService
from app.ai.vector_store import VectorStore


class RecommendationEngine:
    """
    Recommendation Engine for suggesting relevant company documents.
    """

    def __init__(self):
        self.embedding_service = EmbeddingService()
        self.vector_store = VectorStore()

    def recommend_documents(self, query: str, top_k: int = 5):
        """
        Recommend the most relevant documents based on the user's query.

        Args:
            query (str): User's search query.
            top_k (int): Number of documents to return.

        Returns:
            list: Recommended documents.
        """

        query_embedding = self.embedding_service.generate_embedding(query)

        recommendations = self.vector_store.search(
            query_embedding,
            top_k=top_k
        )

        return recommendations


# -----------------------------------
# Example Usage
# -----------------------------------
if __name__ == "__main__":

    engine = RecommendationEngine()

    query = "Leave Policy"

    results = engine.recommend_documents(query)

    print("Recommended Documents:\n")

    for index, document in enumerate(results, start=1):
        print(f"{index}. {document}")