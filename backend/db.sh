#!/bin/bash
# sudo ./db.sh
mkdir /opt/sqlite
SQL_FILE=db.sql
DB_FILE=/opt/sqlite/data.db
sqlite3 -init ${SQL_FILE} ${DB_FILE}