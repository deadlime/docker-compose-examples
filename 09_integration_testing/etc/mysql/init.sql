CREATE DATABASE dev_db;
CREATE DATABASE test_db;

GRANT ALL PRIVILEGES ON dev_db.* TO 'test'@'%';
GRANT ALL PRIVILEGES ON test_db.* TO 'test'@'%';

CREATE TABLE dev_db.items (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE test_db.items (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);
