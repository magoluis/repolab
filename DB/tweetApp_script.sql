-- -----------------------------------------------------
-- Crear DB tweet_app_db
-- -----------------------------------------------------
-- CREATE DATABASE tweet_app_db;
-- USE tweet_app_db;

-- -----------------------------------------------------
-- Tabla User
-- -----------------------------------------------------
CREATE TABLE User (
  idUser VARCHAR(50) NOT NULL,
  name VARCHAR(45) NULL,
  email VARCHAR(100) NULL,
  PRIMARY KEY (idUser)
);


-- -----------------------------------------------------
-- Table `tweet_app_db`.`Tweet`
-- -----------------------------------------------------
CREATE TABLE Tweet (
  message VARCHAR(280) NULL,
  idUser VARCHAR(50) NOT NULL,
  INDEX fk_Tweet_User_idx (idUser),
  CONSTRAINT fk_Tweet_User
    FOREIGN KEY (idUser)
    REFERENCES User (idUser)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);