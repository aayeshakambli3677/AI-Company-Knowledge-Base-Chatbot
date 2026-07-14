# Authentication
POST /users/register
POST /users/login
GET /users/me

# Documents
POST /documents/upload
GET /documents
GET /documents/{id}
DELETE /documents/{id}

# Categories
POST /categories
GET /categories
GET /categories/{id}
DELETE /categories/{id}

# Chats
GET /chats/history
GET /chats
GET /chats/{id}
DELETE /chats/{id}

# Feedback
POST /feedback
GET /feedback
GET /feedback/{id}
DELETE /feedback/{id}

# Admin
GET /admin/dashboard
GET /admin/stats
GET /admin/users
GET /admin/users/{id}
DELETE /admin/users/{id}