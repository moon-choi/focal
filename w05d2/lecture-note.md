ways to avoid duplicate

not specifying the sequence in the seed file
ALTER SEQUENCE STARTS WITH 1-0000

varchar (n) : n is maximum length

--

# databse design

ENUM

GEO

UUID: Universally unique
so long, so many random characters.

--

# relationship types

- one to one

- one to many : most common

- many to many: 2 one to many's. one or more records in table A are related to one or more records in table B through a junction table.
  e.g. authors X publishers

# general design concepts

- not null
- intelligent default values
  -- DEFAULT
  e.g. timestamp DEFAULT NOW()

- dont use calculated fields ( a field whose value is derived from one or more other fields): single source of truth

- try not to delete anything

# ERD: entity relationship diagram

entity: each table

FOREIGN KEY: always on the MANY side

lookup table

if role is in cat table: that means cat can only ever have one role.
