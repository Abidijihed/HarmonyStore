-- DROP DATABASE IF EXISTS harmonystore_db;
-- CREATE DATABASE IF NOT EXISTS harmonystore_db;
USE harmonystore_db;


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
  City VARCHAR(250),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  role VARCHAR(200),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  price_promo DECIMAL(10, 2) NOT NULL,
  quantity_in_stock INT NOT NULL,
  category VARCHAR(50),
  image_url VARCHAR(255),
  Product_material VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS order_items (
  id INT NOT NULL AUTO_INCREMENT,
  total_amount DECIMAL(10, 2) NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  price_per_unit DECIMAL(10, 2) NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products (id),
  PRIMARY KEY (id,product_id)
);
CREATE TABLE IF NOT EXISTS orders (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  order_items_id INT NOT NULL,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
  payement_done BOOLEAN ,
  status ENUM('pending', 'processing', 'shipped', 'delivered', 'canceled') NOT NULL DEFAULT 'pending',
  FOREIGN KEY (order_items_id) REFERENCES order_items (id),
  FOREIGN KEY (user_id) REFERENCES users (id),
  PRIMARY KEY (id,user_id)
);
CREATE TABLE IF NOT EXISTS product_images (
  id INT NOT NULL AUTO_INCREMENT,
  product_image VARCHAR(255) NOT NULL,
  products_id INT NOT NULL,
  PRIMARY KEY (id, products_id),
  FOREIGN KEY (products_id) REFERENCES products(id)
);


-- INSERT INTO users(FirstName,LastName,Email,Address,PhoneNumber,Password,country,Zip,role)VALUES("Said","Belghaji","Malek2013malek@hotmail.fr"," Impasse bir sidi tayeb sidi bou said","+216 54 154 220","8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918","Tunisia","2026","admin");

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
CREATE TABLE IF NOT EXISTS payment (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  paymentRef VARCHAR(250) NOT NULL,
  amount  DECIMAL(10, 2) NOT NULL,
  date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

