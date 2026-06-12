from sqlalchemy import Date

from pydantic import BaseModel, EmailStr


class PrivateUser(BaseModel):
    first_name: str
    last_name: str
    birth_date: Date
    email: EmailStr
    password: str


class Username(BaseModel):
    first_name: str