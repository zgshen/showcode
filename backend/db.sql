-- we don't know how to generate root <with-no-name> (class Root) :(
create table sc_code
(
    id         INTEGER
        constraint sc_code_pk
            primary key autoincrement,
    title      TEXT,
    content    TEXT,
    tag        TEXT,
    created_at INTEGER,
    updated_at INTEGER
);

create table sc_sub_code
(
    id         INTEGER,
    p_id       INTEGER,
    content    TEXT,
    created_at TEXT,
    updated_at TEXT
);

create table sc_user
(
    id         INTEGER
        constraint sc_user_pk
            primary key autoincrement,
    username   TEXT,
    password   TEXT,
    created_at INTEGER,
    updated_at INTEGER
);

INSERT INTO sc_user (id, username, password, created_at, updated_at) VALUES (1, 'akari', '202cb962ac59075b964b07152d234b70', 1659931031, 1659931031);

