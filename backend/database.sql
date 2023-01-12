-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Table `firemen`.`firestation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `firemen`.`firestation` ;

CREATE TABLE IF NOT EXISTS `firemen`.`firestation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `capacity` INT NOT NULL,
  `longitude` DECIMAL NOT NULL,
  `latitude` DECIMAL NOT NULL,
  `img` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `firemen`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `firemen`.`user` ;

CREATE TABLE IF NOT EXISTS `firemen`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `rights` TINYINT NOT NULL,
  `hashedPassword` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `firemen`.`vehicle`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `firemen`.`vehicle` ;

CREATE TABLE IF NOT EXISTS `firemen`.`vehicle` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `modele` VARCHAR(100) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `is_available` TINYINT NOT NULL,
  `firestation_id` INT NOT NULL,
  `in_maintenance` TINYINT NOT NULL,
  `summary` VARCHAR(300) NOT NULL,
  `img` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_vehicle_firestation_idx` (`firestation_id` ASC) VISIBLE,
  CONSTRAINT `fk_vehicle_firestation`
    FOREIGN KEY (`firestation_id`)
    REFERENCES `firemen`.`firestation` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;




INSERT INTO firestation (name, capacity, latitude, longitude, img) VALUES
('Caserne Lyon-Confluence', 10,  45.7468624, 4.8258056,"https://www.wmfs.net/wp-content/uploads/2021/12/Stourbridge-Fire-Station-1024x683.jpg" ),
('Centre dintervention Lyon Corneille', 10,  45.7627835 , 4.8439261, "https://www.wmfs.net/wp-content/uploads/2021/12/Stourbridge-Fire-Station-1024x683.jpg"),
('Centre dintervention Lyon Rochat', 10,  45.7500822 , 4.8480699, "https://www.wmfs.net/wp-content/uploads/2021/12/Stourbridge-Fire-Station-1024x683.jpg"),
('Caserne Lyon - Gerland', 45.7316551, 10, 4.8284384, "https://www.wmfs.net/wp-content/uploads/2021/12/Stourbridge-Fire-Station-1024x683.jpg"),
('Centre dintervention Lyon Croix-Rousse', 10, 45.778717 , 4.820501, "https://www.wmfs.net/wp-content/uploads/2021/12/Stourbridge-Fire-Station-1024x683.jpg"),
('Rhône Sapeurs Pompiers', 45.762685 , 10, 4.8445398, "https://www.wmfs.net/wp-content/uploads/2021/12/Stourbridge-Fire-Station-1024x683.jpg");

INSERT INTO vehicle (modele, category,is_available,firestation_id,in_maintenance, summary ,img)
VALUEs
(
'Renault',
'VSAV',
0,
1,
0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg"
),
('Renault', 'VSAV', 0, 2, 0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg"),
('Man', 'VSAV', 0, 3, 0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg"),
('Man', 'VSAV', 0, 4, 0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg"),
('Renault', 'VSR', 0, 4, 0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg"),
('Renault', 'VSR', 0, 4, 0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg"),
('Mitsubishi', 'VSR', 0, 4, 0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg"),
('Mitsubishi', 'VSR', 0, 4, 0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg"),
('Mercedes', 'EPA', 0, 5, 0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg"),
('Mercedes', 'EPA', 0, 2, 0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg"),
('IVECO', 'EPA', 0, 1, 0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg"),
('IVECO', 'EPA', 0, 3, 0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg"),
('Mercedes', 'FPT', 0, 4, 0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg"),
('Mercedes', 'FPT', 0, 4, 0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg"),
('Mercedes', 'FPT', 0, 4, 0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg"),
('IVECO', 'FPT', 0, 5, 0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg"),
('IVECO', 'FPT', 0, 4, 0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg"),
('IVECO', 'FPT', 0, 3, 0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg"),
('Renault', 'CCF', 0, 2, 0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg"),
('Renault', 'CCF', 0, 1, 0, "un camion", "https://upload.wikimedia.org/wikipedia/commons/4/4f/LFB_Pump_Ladder.jpg");