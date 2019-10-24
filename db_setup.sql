use genrosys

Create Table `admin`(
    `id` INT(11) unsigned AUTO_INCREMENT,
    `email` VARCHAR(255) UNIQUE Not Null,
    `password` VARCHAR(70) Not Null,
    PRIMARY KEY(`id`) 
);

Create Table `employee`(
    `id` INT(11) unsigned AUTO_INCREMENT,
    `company_id` INT(11) unsigned,
    `firstname` VARCHAR(255) Not Null, 
    `lastname` VARCHAR(255) Not Null,
    `profile_photo` TEXT,
    PRIMARY KEY (`id`)
);

Create Table `company`(
    `id` INT(11) unsigned PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) Not Null UNIQUE,
    `address` VARCHAR(255) Not Null
);

Alter Table `employee` ADD FOREIGN KEY fk1(`company_id`) REFERENCES company(`id`) ON UPDATE CASCADE ON DELETE CASCADE;