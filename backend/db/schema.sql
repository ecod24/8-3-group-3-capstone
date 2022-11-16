DROP DATABASE IF EXISTS capstone;
CREATE DATABASE capstone;
\c capstone;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT NOT NULL
);

CREATE TABLE foods (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT NOT NULL
);