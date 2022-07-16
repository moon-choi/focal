mongoDB: read speed is a bit faster

postgrest v.14 or v.12

pgAdmin: graphical interface

csv: comma separated values

# COMMANDS

$ psql
$ \q
$ \du: display users
$ \l: display all databases
$ \c: go to a different database
$ \dt: display tables
$ \t
$ man psql: manual
$ pg dump: backup

$ALTER USER labber WITH SUPERUSER : attributes

every column name is upper case

# FEARUES

OracleDB: you anbuild functions and add logic
PostgreSQL: just raw. added some mongoDB functionality.
MongoDB: don't have tables.

#ERD

\l -> \c

migration scripts:
migration: history of what table you added on specific day.

CREATE database banana;

# important ones

VARCHAR(255): finite string
TEXT: infinite string
INTEGER
BOOLEAN
DATE/DATETIME
INTERGER SERIAL

#google: psql types

#create
CREATE TABLE table_name (
column_name column type,
)

#delete
DROP TABLE table_name

#insert

#back up
pg_dump table_name --file=BACKUP.sql

query: asking, call for database

#rename column

SELECT email AS "user email" FROM users;

BETWEEN:

crow feet: one user(left) has many urls(right)

circle: zero. user can have zero or many urls.

crow feet with line: 1 or more

NEVER USER many to many : crow feet both directions.

LIKE: Mathing result. similar things. it' a wild card.

'%.ca'
%: anything can be in the front
'www.g%.ca'

COUNT:
SUM:

@ sql commands: SELECT, GROUP BY...
@ function: COUNT() -- need brackets
e.g. MAX() MIN() AVG()

NOT NULL

--
Visualization

-Postico
-pgadmin4

--
ERD: Entity–relationship model
