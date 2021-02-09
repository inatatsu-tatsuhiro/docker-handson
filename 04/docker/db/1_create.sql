CREATE DATABASE docker;
use docker;

CREATE TABLE users(
    id VARCHAR(64) NOT NULL ,
    name VARCHAR(64) NOT NULL ,
    nickname VARCHAR(64) NOT NULL ,
    age integer NOT NULL ,
    PRIMARY KEY(id)
);