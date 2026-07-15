import faiss
import numpy as np


class VectorStore:
    """
    FAISS-based Vector Store for storing and searching document embeddings.
    """

    def __init__(self, embedding_dimension=384):
        self.embedding_dimension = embedding_dimension

        # Create FAISS index
        self.index = faiss.IndexFlatL2(self.embedding_dimension)

        # Store original documents
        self.documents = []

    def add_document(self, document, embedding):
        """
        Add a document and its embedding to the vector store.
        """

        embedding = np.array([embedding]).astype("float32")

        self.index.add(embedding)

        self.documents.append(document)

    def add_documents(self, documents, embeddings):
        """
        Add multiple documents.
        """

        for doc, emb in zip(documents, embeddings):
            self.add_document(doc, emb)

    def search(self, query_embedding, top_k=3):
        """
        Search for the most similar documents.
        """

        if len(self.documents) == 0:
            return []

        query_embedding = np.array([query_embedding]).astype("float32")

        distances, indices = self.index.search(query_embedding, top_k)

        results = []

        for idx in indices[0]:
            if idx < len(self.documents):
                results.append(self.documents[idx])

        return results

    def document_count(self):
        """
        Return total number of indexed documents.
        """
        return len(self.documents)


# -----------------------------------
# Example Usage
# -----------------------------------
if __name__ == "__main__":

    from app.ai.embedding_service import EmbeddingService

    embedding_service = EmbeddingService()

    vector_store = VectorStore()

    docs = [
        "Employees receive 12 casual leaves every year.",
        "Office timing is 9:30 AM to 6:30 PM.",
        "Employees must wear ID cards inside the office."
    ]

    embeddings = embedding_service.generate_embeddings(docs)

    vector_store.add_documents(docs, embeddings)

    query = "How many casual leaves are allowed?"

    query_embedding = embedding_service.generate_embedding(query)

    results = vector_store.search(query_embedding)

    print("\nRelevant Documents:\n")

    for doc in results:
        print("-", doc)