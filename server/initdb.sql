PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS team;
DROP TABLE IF EXISTS user;

CREATE TABLE team (
    teamname TEXT NOT NULL,

    PRIMARY KEY (teamname)
);

CREATE TABLE user (
    email TEXT NOT NULL,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL,
    pnumber TEXT NOT NULL,
    teamname TEXT NOT NULL,

    PRIMARY KEY (email),

    FOREIGN KEY (teamname) REFERENCES team(teamname)
);