const pg = require('pg) <- requires postgres
const Client = pg.Client

--
const verb = process.argv[2];
node ./spottool.js browse

--

# | Pipe sign in terminal

node ./spottool.js browse | grep SQL

After pipe sign, it becomes stdin

pg_dump: back up

clean

--

$1, $2 는 각각 첫번째 입력값, 두번째 입력값

# DATA TYPES

SMALLINT, INTEGER, BIGINT, DECIMAL, NUMERIC, REAL, DOUBLE, SMALLSERIAL, SERIAL, BIGSERIAL.

id INTEGER PRIMARY KEY,
name VARCHAR(255),
birth_year SMALLINT,
member_since TIMESTAMP
--

# psql commands

\q : quit
\dt : all tables
\d tablename
\i : insert?

--

Quick Reference
Primary key column:
Use the name id and then SERIAL PRIMARY KEY.
Foreign key columns:
Add _id to the singular name of the column you are referencing.
If the primary key is SERIAL, then the foreign key should be INTEGER.
You also should create the foreign key with REFERENCES table_name(id) ON DELETE CASCADE.
Names, emails, usernames and passwords can all be stored as VARCHAR(255). Students to cohorts would be cohort_id. The type would be INTEGER .
Dates would use the DATE type. If we needed date and time, use TIMESTAMP.
Numbers:
We will use INTEGER to represent most numbers. There are other sizes of integers as well.
SMALLINT -32,768 to 32,767 (thirty-two thousand)
INTEGER -2,147,483,648 to 2,147,483,647 (two billion)
BIGINT -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 (nine quintillion)
SERIAL 1 to 2,147,483,647 (auto incrementing)
Dates, Phone Numbers & Currency
Become familiar with the ISO 8601 date formatting standard. The string '2018-02-12' uses this format to represent 'February 12th, 2018'. Year, month and then day. Dates should be stored consistently. Apply timezones and formatting when displayed to the user.
Store phone numbers as VARCHAR, there are so many possible formats. The number 214 748 3647 hits our INTEGER limit.
Store currency as an integer representing cents. Use a BIGINT if you need values over $21 million dollars.
