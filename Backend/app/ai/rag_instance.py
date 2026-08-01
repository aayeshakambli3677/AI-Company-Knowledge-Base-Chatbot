from app.ai.rag_pipeline import RAGPipeline

rag = None


def get_rag():
    global rag

    if rag is None:
        rag = RAGPipeline()

    return rag