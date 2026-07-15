import pytest
from app.utils.auth import (
    hash_password,
    verify_password,
    create_access_token,
    verify_access_token
)


def test_hash_password():
    password = "Password123"

    hashed = hash_password(password)

    assert hashed != password
    assert verify_password(password, hashed)


def test_verify_password():
    password = "admin123"

    hashed = hash_password(password)

    assert verify_password(password, hashed) is True
    assert verify_password("wrongpassword", hashed) is False


def test_create_access_token():
    token = create_access_token(
        {"sub": "admin@company.com"}
    )

    assert token is not None
    assert isinstance(token, str)


def test_verify_access_token():
    token = create_access_token(
        {"sub": "admin@company.com"}
    )

    email = verify_access_token(token)

    assert email == "admin@company.com"