DROP DATABASE IF EXISTS capstone;
CREATE DATABASE capstone;
\c capstone;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT NOT NULL,
    kosher BOOLEAN,
    halal BOOLEAN,
    lactose_intolerant BOOLEAN,
    gluten_intolerant BOOLEAN,
    vegetarian BOOLEAN,
    vegan BOOLEAN,
    keto BOOLEAN,
    pescatarian BOOLEAN,
    non_dairy BOOLEAN,
    non_alcoholic BOOLEAN,
    organic BOOLEAN
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