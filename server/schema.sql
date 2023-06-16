DROP DATABASE IF EXISTS harmonystore_db;
CREATE DATABASE IF NOT EXISTS harmonystore_db;
USE harmonystore_db;
CREATE TABLE IF NOT EXISTS product (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);