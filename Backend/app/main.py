from fastapi import FastAPI

from app.routes.auth_routes import router as auth_router
from app.routes.user_routes import router as user_router
from app.routes.admin_routes import router as admin_router
from app.routes.document_routes import router as document_router
from app.routes.category_routes import router as category_router
from app.routes.feedback_routes import router as feedback_router
from app.routes.chatbot_routes import router as chat_router
from app.middleware.exception_handler import global_exception_handler

app = FastAPI(
    title="AI Company Knowledge Base API"
)

app.include_router(auth_router)
app.include_router(user_router)
app.include_router(admin_router)
app.include_router(document_router)
app.include_router(category_router)
app.include_router(feedback_router)
app.include_router(chat_router)
app.add_exception_handler(Exception,global_exception_handler)

@app.get("/")
def home():
    return {
        "message": "API Running"
    }