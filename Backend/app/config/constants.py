"""
constants.py

This file contains constant values used throughout the project.
"""


# ===========================
# Application
# ===========================

APP_NAME = "AI Company Knowledge Base Chatbot"
APP_VERSION = "1.0.0"


# ===========================
# User Roles
# ===========================

ROLE_ADMIN = "Admin"
ROLE_EMPLOYEE = "Employee"


# ===========================
# Supported File Types
# ===========================

SUPPORTED_FILE_TYPES = [
    ".pdf",
    ".docx",
    ".txt"
]


# ===========================
# AI Configuration
# ===========================

EMBEDDING_MODEL = "all-MiniLM-L6-v2"

TOP_K_RESULTS = 5

MAX_CHUNK_SIZE = 500

CHUNK_OVERLAP = 100


# ===========================
# Vector Database
# ===========================

VECTOR_INDEX_FILE = "faiss_index.bin"

VECTOR_METADATA_FILE = "metadata.pkl"


# ===========================
# Chat Settings
# ===========================

MAX_CHAT_HISTORY = 20

DEFAULT_RESPONSE = (
    "Sorry, I couldn't find the requested information "
    "in the company knowledge base."
)


# ===========================
# API Messages
# ===========================

SUCCESS = "Success"

FAILED = "Failed"

INVALID_REQUEST = "Invalid Request"

NOT_FOUND = "Data Not Found"

SERVER_ERROR = "Internal Server Error"


# ===========================
# Authentication
# ===========================

ACCESS_TOKEN_EXPIRE_MINUTES = 60

ALGORITHM = "HS256"


# ===========================
# Logging
# ===========================

LOG_FILE = "logs/application.log"

LOG_FORMAT = "%(asctime)s | %(levelname)s | %(message)s"