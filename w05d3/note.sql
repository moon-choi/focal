SELECT * FROM users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  birth_year SMALLINT NOT NULL,
  member_since TIMESTAMP NOT NULL DEFAULT Now()
);

INSERT INTO users (id, name, birth_year, member_since)
VALUES (1, 'Susan Hudson', 2000, Now());

ALTER TABLE users 
ALTER COLUMN member_since 
SET DEFAULT Now();

INSERT INTO users (id, name, birth_year)
VALUES (2, 'Malloy Jenkins', 1000);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  birth_year SMALLINT NOT NULL,
  member_since TIMESTAMP NOT NULL DEFAULT Now()
);

INSERT INTO users (name, birth_year)
VALUES ('Susan Hudson', 2000),
('Malloy Jenkins', 1000);

INSERT INTO pets (name, owner_id)
VALUES ('mittens', 1);

INSERT INTO pets (name, owner_id)
VALUES ('fluffy', 99);