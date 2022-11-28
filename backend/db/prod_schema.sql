\c capstone_jie9;

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