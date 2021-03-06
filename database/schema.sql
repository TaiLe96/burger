-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.

drop database if exists burgers_db;
create database burgers_db;
use burgers_db;

create table burger (
    id int not null auto_increment,
    burger_name varchar(50) not null,
    devoured boolean default false,
    primary key(id)
);