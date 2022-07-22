create schema challenge;

create table challenge.post(
    id_post serial primary key,
    creation_date timestamp id_user integer
);

create table challenge.comment(
    id_comment serial primary key,
    comment character varying,
    id_comment_parent integer,
    id_post integer
);

create table challenge.user(
    id_user serial primary key,
    name character varying,
    email character varying,
    password character varying,
    id_rol integer
);

create table challenge.rol(
    id_rol serial primary key,
    name character varying
);

insert into
    challenge.rol (name)
values
    ('Admin');

create table challenge.rel_rol_permission(
    id_rol integer,
    id_permission integer
);

create table challenge.permission(
    id_permission serial primary key,
    name character varying
);

insert into
    challenge.rol (name)
values
    ('Admin');

create table challenge.log(
    id_log serial primary key,
    action character varying
);

SELECT id_user, name, email, password, id_rol
FROM challenge.user;