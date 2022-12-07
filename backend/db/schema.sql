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
    about_me TEXT,
    firebase_id TEXT
);

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    liker_id INT REFERENCES users(id) NOT NULL,
    liked_id INT REFERENCES users(id) NOT NULL
    -- request_status INTEGER DEFAULT 0,
    -- date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- date_accepted TIMESTAMP DEFAULT NULL
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