import faiss
import numpy as np
import os
import pickle


class VectorStore:

    def __init__(
        self,
        embedding_dimension=384,
        index_path="vector_store/index.faiss",
        docs_path="vector_store/documents.pkl"
    ):

        self.embedding_dimension = embedding_dimension
        self.index_path = index_path
        self.docs_path = docs_path

        os.makedirs("vector_store", exist_ok=True)

        if os.path.exists(self.index_path) and os.path.exists(self.docs_path):

            self.index = faiss.read_index(self.index_path)

            with open(self.docs_path, "rb") as f:
                self.documents = pickle.load(f)

        else:

            self.index = faiss.IndexFlatL2(
                self.embedding_dimension
            )

            self.documents = []


    def save(self):

        faiss.write_index(
            self.index,
            self.index_path
        )

        with open(self.docs_path, "wb") as f:
            pickle.dump(
                self.documents,
                f
            )


    def add_document(
        self,
        document,
        embedding,
        document_id
    ):

        embedding = np.array(
            [embedding]
        ).astype("float32")


        self.index.add(
            embedding
        )


        self.documents.append(
            {
                "document_id": document_id,
                "text": document
            }
        )


        self.save()



    def add_documents(
        self,
        documents,
        embeddings,
        document_id
    ):

        for doc, emb in zip(
            documents,
            embeddings
        ):

            self.add_document(
                doc,
                emb,
                document_id
            )


    def search(
        self,
        query_embedding,
        top_k=3,
        document_id=None
    ):

        if len(self.documents) == 0:
            return []


        query_embedding = np.array(
            [query_embedding]
        ).astype("float32")


        distances, indices = self.index.search(
            query_embedding,
            len(self.documents)
        )


        results = []


        for idx in indices[0]:

            if idx >= len(self.documents):
                continue


            doc = self.documents[idx]


            if (
                document_id is None
                or doc["document_id"] == document_id
            ):

                results.append(
                    doc["text"]
                )


            if len(results) >= top_k:
                break


        return results