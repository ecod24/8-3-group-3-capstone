DROP DATABASE IF EXISTS capstone;
CREATE DATABASE capstone;
\c capstone;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT NOT NULL,
    email TEXT,
    age INT,
    dietary_restrictions TEXT,
    food_preferences TEXT,
    sexual_orientation TEXT,
    gender TEXT,
    religion TEXT
);

CREATE TABLE foods (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT NOT NULL
);

CREATE TABLE allergies (
    id SERIAL PRIMARY KEY,
    allergy_type TEXT,
    user_id INTEGER REFERENCES users(id)
);