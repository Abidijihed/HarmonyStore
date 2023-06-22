-- DROP DATABASE IF EXISTS harmonystore_db;
-- CREATE DATABASE IF NOT EXISTS harmonystore_db;
USE harmonystore_db;

CREATE TABLE IF NOT EXISTS products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  Origin_price INT NOT NULL,
  quantity INT NOT NULL,
  Promo_price INT NOT NULL,
  reference VARCHAR(255) NOT NULL,
  product_image VARCHAR(255) NOT NULL,
  availability VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  check_add_or_not BOOLEAN NOT NULL,
  PRIMARY KEY (id,check_add_or_not)
);

CREATE TABLE IF NOT EXISTS product_images (
  id INT NOT NULL AUTO_INCREMENT,
  product_image VARCHAR(255) NOT NULL,
  products_id INT NOT NULL,
  PRIMARY KEY (id, products_id),
  FOREIGN KEY (products_id) REFERENCES products(id)
);

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  FirstName VARCHAR(200),
  LastName VARCHAR(200),
  Email VARCHAR(200),
  Address VARCHAR(255),
  PhoneNumber VARCHAR(255),
  Password VARCHAR(200),
  image VARCHAR(255),
  country VARCHAR(200),
  Zip VARCHAR(250),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  role VARCHAR(200),
  PRIMARY KEY (id)
);
-- INSERT INTO users(FirstName,LastName,Email,Address,PhoneNumber,Password,country,Zip)VALUES("Said","Belghaji","Malek2013malek@hotmail.fr"," Impasse bir sidi tayeb sidi bou said","+216 54 154 220","8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918","Tunisia","2026");

CREATE TABLE IF NOT EXISTS sessions (
  id INT NOT NULL AUTO_INCREMENT,
  users_id INT NOT NULL,
  session VARCHAR(250) NOT NULL,
  date VARCHAR(250) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (users_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS newsletter (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(250) NOT NULL,
  date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS usersorder (
  id INT NOT NULL AUTO_INCREMENT,
  validate_add_or_not BOOLEAN NOT NULL,
  FirstName VARCHAR(200) NOT NULL,
  Email VARCHAR(200) NOT NULL,
  address VARCHAR(255) NOT NULL,
  PhoneNumber VARCHAR(255) NOT NULL,
  country VARCHAR(200) NOT NULL,
  Zip VARCHAR(250) NOT NULL,
  users_id INT NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  product_name VARCHAR(200) NOT NULL,
  product_quantity INT NOT NULL,
  date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (id, validate_add_or_not, users_id),
  FOREIGN KEY (users_id) REFERENCES users(id)
);