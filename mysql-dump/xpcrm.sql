-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema xpcrm
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema xpcrm
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `xpcrm` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `xpcrm` ;

-- -----------------------------------------------------
-- Table `xpcrm`.`brands`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `xpcrm`.`brands` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `xpcrm`.`colors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `xpcrm`.`colors` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `xpcrm`.`lists`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `xpcrm`.`lists` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `xpcrm`.`locations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `xpcrm`.`locations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `xpcrm`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `xpcrm`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `idBrand` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_products_brands1_idx` (`idBrand` ASC) VISIBLE,
  CONSTRAINT `fk_products_brands1`
    FOREIGN KEY (`idBrand`)
    REFERENCES `xpcrm`.`brands` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `xpcrm`.`typeProduct`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `xpcrm`.`typeProduct` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `xpcrm`.`productsVariants`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `xpcrm`.`productsVariants` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `idProduct` INT NOT NULL,
  `idColor` INT NOT NULL,
  `idTypeProduct` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_productsVariants_products1_idx` (`idProduct` ASC) VISIBLE,
  INDEX `fk_productsVariants_colors1_idx` (`idColor` ASC) VISIBLE,
  INDEX `fk_productsVariants_typeProduct1_idx` (`idTypeProduct` ASC) VISIBLE,
  CONSTRAINT `fk_productsVariants_colors1`
    FOREIGN KEY (`idColor`)
    REFERENCES `xpcrm`.`colors` (`id`),
  CONSTRAINT `fk_productsVariants_products1`
    FOREIGN KEY (`idProduct`)
    REFERENCES `xpcrm`.`products` (`id`),
  CONSTRAINT `fk_productsVariants_typeProduct1`
    FOREIGN KEY (`idTypeProduct`)
    REFERENCES `xpcrm`.`typeProduct` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `xpcrm`.`prices`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `xpcrm`.`prices` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `price` FLOAT NOT NULL,
  `idProductsVariants` INT NOT NULL,
  `idLists` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_prices_productsVariants1_idx` (`idProductsVariants` ASC) VISIBLE,
  INDEX `fk_prices_lists1_idx` (`idLists` ASC) VISIBLE,
  CONSTRAINT `fk_prices_lists1`
    FOREIGN KEY (`idLists`)
    REFERENCES `xpcrm`.`lists` (`id`),
  CONSTRAINT `fk_prices_productsVariants1`
    FOREIGN KEY (`idProductsVariants`)
    REFERENCES `xpcrm`.`productsVariants` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `xpcrm`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `xpcrm`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `xpcrm`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `xpcrm`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(255) NOT NULL,
  `userName` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  `idLocation` INT NOT NULL,
  `idRole` INT NOT NULL,
  `isActive` TINYINT NOT NULL,
  `isVerify` TINYINT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `userName` (`userName` ASC) VISIBLE,
  INDEX `fk_users_locations1_idx` (`idLocation` ASC) VISIBLE,
  INDEX `fk_users_roles1_idx` (`idRole` ASC) VISIBLE,
  CONSTRAINT `fk_users_locations1`
    FOREIGN KEY (`idLocation`)
    REFERENCES `xpcrm`.`locations` (`id`),
  CONSTRAINT `fk_users_roles1`
    FOREIGN KEY (`idRole`)
    REFERENCES `xpcrm`.`roles` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 38
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
