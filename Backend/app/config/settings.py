from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    # Application
    APP_NAME: str = "AI Company Knowledge Base Chatbot"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = True

    # Database
    DATABASE_URL: str = "mysql+pymysql://root:password@localhost/company_chatbot"

    # JWT
    SECRET_KEY: str = "your_secret_key"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    # AI
    OPENAI_API_KEY: str = ""
    GEMINI_API_KEY: str = ""

    # Vector Store
    VECTOR_DB_PATH: str = "./vector_store"

    class Config:
        env_file = ".env"
        case_sensitive = True


@lru_cache()
def get_settings():
    return Settings()


settings = get_settings()