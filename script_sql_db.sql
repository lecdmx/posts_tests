--
-- PostgreSQL database dump
--

-- Dumped from database version 13.5 (Debian 13.5-1.pgdg110+1)
-- Dumped by pg_dump version 14.2

-- Started on 2022-07-25 11:09:51

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 8 (class 2615 OID 16542)
-- Name: challenge; Type: SCHEMA; Schema: -; Owner: sa
--

CREATE SCHEMA challenge;


ALTER SCHEMA challenge OWNER TO sa;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 221 (class 1259 OID 16578)
-- Name: comment; Type: TABLE; Schema: challenge; Owner: sa
--

CREATE TABLE challenge.comment (
    id_comment integer NOT NULL,
    comment character varying,
    id_comment_parent integer,
    id_post integer,
    creation_date timestamp without time zone,
    id_user integer
);


ALTER TABLE challenge.comment OWNER TO sa;

--
-- TOC entry 220 (class 1259 OID 16576)
-- Name: comment_id_comment_seq; Type: SEQUENCE; Schema: challenge; Owner: sa
--

CREATE SEQUENCE challenge.comment_id_comment_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE challenge.comment_id_comment_seq OWNER TO sa;

--
-- TOC entry 3148 (class 0 OID 0)
-- Dependencies: 220
-- Name: comment_id_comment_seq; Type: SEQUENCE OWNED BY; Schema: challenge; Owner: sa
--

ALTER SEQUENCE challenge.comment_id_comment_seq OWNED BY challenge.comment.id_comment;


--
-- TOC entry 240 (class 1259 OID 16712)
-- Name: log; Type: TABLE; Schema: challenge; Owner: sa
--

CREATE TABLE challenge.log (
    id_log integer NOT NULL,
    id_user integer,
    id_post integer,
    content character varying
);


ALTER TABLE challenge.log OWNER TO sa;

--
-- TOC entry 239 (class 1259 OID 16710)
-- Name: log_id_log_seq; Type: SEQUENCE; Schema: challenge; Owner: sa
--

CREATE SEQUENCE challenge.log_id_log_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE challenge.log_id_log_seq OWNER TO sa;

--
-- TOC entry 3149 (class 0 OID 0)
-- Dependencies: 239
-- Name: log_id_log_seq; Type: SEQUENCE OWNED BY; Schema: challenge; Owner: sa
--

ALTER SEQUENCE challenge.log_id_log_seq OWNED BY challenge.log.id_log;


--
-- TOC entry 225 (class 1259 OID 16597)
-- Name: permission; Type: TABLE; Schema: challenge; Owner: sa
--

CREATE TABLE challenge.permission (
    id_permission integer NOT NULL,
    name character varying
);


ALTER TABLE challenge.permission OWNER TO sa;

--
-- TOC entry 224 (class 1259 OID 16595)
-- Name: permission_id_permission_seq; Type: SEQUENCE; Schema: challenge; Owner: sa
--

CREATE SEQUENCE challenge.permission_id_permission_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE challenge.permission_id_permission_seq OWNER TO sa;

--
-- TOC entry 3150 (class 0 OID 0)
-- Dependencies: 224
-- Name: permission_id_permission_seq; Type: SEQUENCE OWNED BY; Schema: challenge; Owner: sa
--

ALTER SEQUENCE challenge.permission_id_permission_seq OWNED BY challenge.permission.id_permission;


--
-- TOC entry 223 (class 1259 OID 16589)
-- Name: post; Type: TABLE; Schema: challenge; Owner: sa
--

CREATE TABLE challenge.post (
    id_post integer NOT NULL,
    creation_date timestamp without time zone,
    id_user integer,
    post character varying
);


ALTER TABLE challenge.post OWNER TO sa;

--
-- TOC entry 222 (class 1259 OID 16587)
-- Name: post_id_post_seq; Type: SEQUENCE; Schema: challenge; Owner: sa
--

CREATE SEQUENCE challenge.post_id_post_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE challenge.post_id_post_seq OWNER TO sa;

--
-- TOC entry 3151 (class 0 OID 0)
-- Dependencies: 222
-- Name: post_id_post_seq; Type: SEQUENCE OWNED BY; Schema: challenge; Owner: sa
--

ALTER SEQUENCE challenge.post_id_post_seq OWNED BY challenge.post.id_post;


--
-- TOC entry 241 (class 1259 OID 16748)
-- Name: rel_user_permission; Type: TABLE; Schema: challenge; Owner: sa
--

CREATE TABLE challenge.rel_user_permission (
    id_user integer NOT NULL,
    id_permission integer NOT NULL
);


ALTER TABLE challenge.rel_user_permission OWNER TO sa;

--
-- TOC entry 217 (class 1259 OID 16545)
-- Name: rol; Type: TABLE; Schema: challenge; Owner: sa
--

CREATE TABLE challenge.rol (
    id_rol integer NOT NULL,
    name character varying
);


ALTER TABLE challenge.rol OWNER TO sa;

--
-- TOC entry 216 (class 1259 OID 16543)
-- Name: rol_id_rol_seq; Type: SEQUENCE; Schema: challenge; Owner: sa
--

CREATE SEQUENCE challenge.rol_id_rol_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE challenge.rol_id_rol_seq OWNER TO sa;

--
-- TOC entry 3152 (class 0 OID 0)
-- Dependencies: 216
-- Name: rol_id_rol_seq; Type: SEQUENCE OWNED BY; Schema: challenge; Owner: sa
--

ALTER SEQUENCE challenge.rol_id_rol_seq OWNED BY challenge.rol.id_rol;


--
-- TOC entry 219 (class 1259 OID 16567)
-- Name: user; Type: TABLE; Schema: challenge; Owner: sa
--

CREATE TABLE challenge."user" (
    id_user integer NOT NULL,
    name character varying,
    email character varying,
    password character varying,
    id_rol integer
);


ALTER TABLE challenge."user" OWNER TO sa;

--
-- TOC entry 218 (class 1259 OID 16565)
-- Name: user_id_user_seq; Type: SEQUENCE; Schema: challenge; Owner: sa
--

CREATE SEQUENCE challenge.user_id_user_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE challenge.user_id_user_seq OWNER TO sa;

--
-- TOC entry 3153 (class 0 OID 0)
-- Dependencies: 218
-- Name: user_id_user_seq; Type: SEQUENCE OWNED BY; Schema: challenge; Owner: sa
--

ALTER SEQUENCE challenge.user_id_user_seq OWNED BY challenge."user".id_user;


--
-- TOC entry 2975 (class 2604 OID 16581)
-- Name: comment id_comment; Type: DEFAULT; Schema: challenge; Owner: sa
--

ALTER TABLE ONLY challenge.comment ALTER COLUMN id_comment SET DEFAULT nextval('challenge.comment_id_comment_seq'::regclass);


--
-- TOC entry 2978 (class 2604 OID 16715)
-- Name: log id_log; Type: DEFAULT; Schema: challenge; Owner: sa
--

ALTER TABLE ONLY challenge.log ALTER COLUMN id_log SET DEFAULT nextval('challenge.log_id_log_seq'::regclass);


--
-- TOC entry 2977 (class 2604 OID 16600)
-- Name: permission id_permission; Type: DEFAULT; Schema: challenge; Owner: sa
--

ALTER TABLE ONLY challenge.permission ALTER COLUMN id_permission SET DEFAULT nextval('challenge.permission_id_permission_seq'::regclass);


--
-- TOC entry 2976 (class 2604 OID 16592)
-- Name: post id_post; Type: DEFAULT; Schema: challenge; Owner: sa
--

ALTER TABLE ONLY challenge.post ALTER COLUMN id_post SET DEFAULT nextval('challenge.post_id_post_seq'::regclass);


--
-- TOC entry 2973 (class 2604 OID 16548)
-- Name: rol id_rol; Type: DEFAULT; Schema: challenge; Owner: sa
--

ALTER TABLE ONLY challenge.rol ALTER COLUMN id_rol SET DEFAULT nextval('challenge.rol_id_rol_seq'::regclass);


--
-- TOC entry 2974 (class 2604 OID 16570)
-- Name: user id_user; Type: DEFAULT; Schema: challenge; Owner: sa
--

ALTER TABLE ONLY challenge."user" ALTER COLUMN id_user SET DEFAULT nextval('challenge.user_id_user_seq'::regclass);


--
-- TOC entry 3135 (class 0 OID 16578)
-- Dependencies: 221
-- Data for Name: comment; Type: TABLE DATA; Schema: challenge; Owner: sa
--

COPY challenge.comment (id_comment, comment, id_comment_parent, id_post, creation_date, id_user) FROM stdin;
23	Comentario 2 en post 1	\N	35	2022-07-24 15:51:18.786568	\N
24	Comentario 3 en post 1	\N	35	2022-07-24 15:51:20.515916	\N
25	Comentario 3 en post 1	23	35	2022-07-24 15:51:51.798663	\N
26	Comentario 3 en post 1	23	35	2022-07-25 05:13:03.236424	\N
27	Comentario 3 en post 1	23	35	2022-07-25 05:13:18.022688	\N
28	Comentario 3 en post 1	\N	35	2022-07-25 05:16:54.158946	\N
29	Comentario 3 en post 1	\N	35	2022-07-25 05:17:11.564614	\N
30	Comentario 3 en post 1	\N	35	2022-07-25 05:17:58.553225	\N
31	Nuevo comentario	\N	35	2022-07-25 05:22:06.007183	\N
33	Comentario 3 en post 1	\N	35	2022-07-25 05:59:56.903537	\N
34	Comentario 3 en post 1	\N	35	2022-07-25 06:00:45.189758	\N
35	Comentario 3 en post 1	\N	35	2022-07-25 06:16:18.545285	\N
36	Comentario 3 en post 1	\N	35	2022-07-25 06:21:44.113333	\N
37	Comentario 3 en post 1	\N	35	2022-07-25 06:22:06.067644	\N
38	Comentario 3 en post 1	\N	35	2022-07-25 06:27:43.187578	\N
39	Comentario 3 en post 1	\N	35	2022-07-25 06:36:28.407487	\N
40	Comentario 3 en post 1	\N	35	2022-07-25 06:38:50.696644	\N
42	Comentario 3 en post 1	\N	35	2022-07-25 06:43:39.411922	\N
43	Comentario 3 en post 1	\N	35	2022-07-25 06:50:02.845904	\N
44	Comentario 3 en post 1	\N	35	2022-07-25 14:59:36.771892	\N
45	Comentario 3 en post 1	\N	35	2022-07-25 15:04:22.696208	\N
46	Comentario 3 en post 1	35	35	2022-07-25 15:04:22.794524	35
47	Comentario 3 en post 1	\N	35	2022-07-25 15:04:43.683854	\N
48	Comentario 3 en post 1	35	35	2022-07-25 15:04:43.778378	35
49	Comentario 3 en post 1	\N	35	2022-07-25 15:19:45.486346	\N
50	Comentario 3 en post 1	35	35	2022-07-25 15:19:45.578095	35
51	Comentario 3 en post 1	\N	35	2022-07-25 15:23:37.141869	\N
52	Comentario 3 en post 1	35	35	2022-07-25 15:23:37.230821	35
53	Comentario 3 en post 1	\N	35	2022-07-25 15:26:43.738236	\N
54	Comentario 3 en post 1	35	35	2022-07-25 15:26:43.826766	35
55	Comentario 3 en post 1	\N	35	2022-07-25 15:30:03.658106	\N
56	Comentario 3 en post 1	35	35	2022-07-25 15:30:03.852621	35
57	Comentario 3 en post 1	\N	35	2022-07-25 15:43:54.4257	\N
58	Comentario 3 en post 1	35	35	2022-07-25 15:43:54.511533	35
59	Comentario 3 en post 1	\N	35	2022-07-25 15:44:24.834615	\N
60	Comentario 3 en post 1	35	35	2022-07-25 15:44:24.920193	35
61	Comentario 3 en post 1	\N	35	2022-07-25 15:46:38.859413	\N
62	Comentario 3 en post 1	35	35	2022-07-25 15:46:38.968865	35
63	Comentario 3 en post 1	\N	35	2022-07-25 15:47:50.44173	\N
64	Comentario 3 en post 1	35	35	2022-07-25 15:47:50.530279	35
65	Comentario 3 en post 1	\N	35	2022-07-25 15:51:30.687574	\N
66	Comentario 3 en post 1	35	35	2022-07-25 15:51:30.777932	35
67	Comentario 3 en post 1	\N	35	2022-07-25 15:53:43.894985	\N
68	Comentario 3 en post 1	35	35	2022-07-25 15:53:44.014501	35
69	Comentario 3 en post 1	\N	35	2022-07-25 15:54:19.609331	\N
70	Comentario 3 en post 1	35	35	2022-07-25 15:54:19.700878	35
\.


--
-- TOC entry 3141 (class 0 OID 16712)
-- Dependencies: 240
-- Data for Name: log; Type: TABLE DATA; Schema: challenge; Owner: sa
--

COPY challenge.log (id_log, id_user, id_post, content) FROM stdin;
1	1	7	Usuario 1 creó Post 7
2	1	8	Usuario 1 creó Post 8
3	1	9	Usuario 1 creó Post 9
4	1	10	Usuario 1 creó Post 10
5	1	11	Usuario 1 creó Post 11
6	1	12	Usuario 1 creó Post 12
7	1	18	User 1 created Post 18
8	1	20	User 1 created Post 20
9	1	21	User 1 created Post 21
10	1	22	User 1 created Post 22
11	1	1	User 1 deleted Post 0
12	1	23	User 1 created Post 23
13	1	1	User 1 deleted Post 0
14	1	2	User 1 deleted Post 0
15	1	3	User 1 deleted Post 0
16	1	24	User 1 created Post 24
17	1	25	User 1 created Post 25
18	4	28	User 4 created Post 28
19	8	22	User 8 deleted Post 0
20	8	15	User 8 deleted Post 15
21	8	15	User 8 updated Post 15
22	8	15	User 8 updated Post 15
23	8	14	User 8 updated Post 14
24	8	13	User 8 updated Post 13
25	11	29	User 11 created Post 29
26	11	31	User 11 created Post 31
27	11	32	User 11 created Post 32
28	11	33	User 11 created Post 33
29	11	34	User 11 created Post 34
40	36	42	User 36 deleted Post 42
41	36	42	User 36 deleted Post 42
42	36	42	User 36 deleted Post 42
43	36	42	User 36 deleted Post 42
44	36	42	User 36 deleted Post 42
45	35	42	User 35 updated Post 42
46	35	42	User 35 updated Post 42
48	36	42	User 36 deleted Post 42
49	35	42	User 35 updated Post 42
50	44	42	User 44 updated Post 42
51	44	42	User 44 updated Post 42
53	35	42	User 35 updated Post 42
54	35	42	User 35 updated Post 42
55	35	42	User 35 updated Post 42
56	35	42	User 35 updated Post 42
57	35	42	User 35 updated Post 42
58	35	42	User 35 updated Post 42
59	35	42	User 35 updated Post 42
60	36	42	User 36 deleted Post 42
63	36	42	User 36 deleted Post 42
64	35	42	User 35 updated Post 42
66	36	42	User 36 deleted Post 42
67	35	42	User 35 updated Post 42
69	36	42	User 36 deleted Post 42
70	35	42	User 35 updated Post 42
72	36	42	User 36 deleted Post 42
73	35	42	User 35 updated Post 42
75	36	42	User 36 deleted Post 42
76	35	42	User 35 updated Post 42
78	36	42	User 36 deleted Post 42
79	35	42	User 35 updated Post 42
81	36	42	User 36 deleted Post 42
82	35	42	User 35 updated Post 42
84	36	42	User 36 deleted Post 42
85	35	42	User 35 updated Post 42
88	36	42	User 36 deleted Post 42
89	35	42	User 35 updated Post 42
90	35	42	User 35 updated Post 42
92	36	42	User 36 deleted Post 42
93	35	42	User 35 updated Post 42
95	36	42	User 36 deleted Post 42
96	35	42	User 35 updated Post 42
98	36	42	User 36 deleted Post 42
99	35	42	User 35 updated Post 42
101	36	42	User 36 deleted Post 42
102	35	42	User 35 updated Post 42
104	36	42	User 36 deleted Post 42
105	35	42	User 35 updated Post 42
107	35	64	User 35 created Post 64
108	35	65	User 35 created Post 65
109	36	42	User 36 deleted Post 42
110	35	42	User 35 updated Post 42
111	35	66	User 35 created Post 66
112	36	42	User 36 deleted Post 42
113	35	42	User 35 updated Post 42
114	35	67	User 35 created Post 67
115	36	42	User 36 deleted Post 42
116	35	42	User 35 updated Post 42
117	35	68	User 35 created Post 68
118	36	42	User 36 deleted Post 42
119	35	42	User 35 updated Post 42
120	35	69	User 35 created Post 69
121	36	42	User 36 deleted Post 42
122	35	42	User 35 updated Post 42
123	35	70	User 35 created Post 70
124	36	42	User 36 deleted Post 42
125	35	42	User 35 updated Post 42
126	35	71	User 35 created Post 71
127	36	42	User 36 deleted Post 42
128	35	42	User 35 updated Post 42
129	35	72	User 35 created Post 72
130	36	42	User 36 deleted Post 42
131	35	42	User 35 updated Post 42
132	35	73	User 35 created Post 73
133	36	42	User 36 deleted Post 42
134	35	42	User 35 updated Post 42
135	35	74	User 35 created Post 74
136	36	42	User 36 deleted Post 42
137	35	42	User 35 updated Post 42
138	35	75	User 35 created Post 75
139	36	42	User 36 deleted Post 42
140	35	42	User 35 updated Post 42
\.


--
-- TOC entry 3139 (class 0 OID 16597)
-- Dependencies: 225
-- Data for Name: permission; Type: TABLE DATA; Schema: challenge; Owner: sa
--

COPY challenge.permission (id_permission, name) FROM stdin;
1	Consultar, crear, eliminar posts.
2	Actualizar posts.
3	Eliminar comentarios.
\.


--
-- TOC entry 3137 (class 0 OID 16589)
-- Dependencies: 223
-- Data for Name: post; Type: TABLE DATA; Schema: challenge; Owner: sa
--

COPY challenge.post (id_post, creation_date, id_user, post) FROM stdin;
36	2022-07-24 15:40:02.121089	36	Post ...
37	2022-07-24 15:40:03.325201	36	Post ...
38	2022-07-24 15:40:04.783835	36	Post ...
39	2022-07-24 15:40:06.19817	36	Post ...
35	2022-07-14 15:39:55.713018	36	Post ...
40	2022-07-25 02:30:11.095081	36	Post ...
41	2022-07-25 02:48:24.591404	35	Post ...
43	2022-07-25 02:51:09.599691	35	Post ...
44	2022-07-25 03:01:19.141183	35	Post ...
45	2022-07-25 03:44:54.43855	35	Post ...
46	2022-07-25 03:53:35.471925	35	Post ...
47	2022-07-25 04:29:38.402289	35	Post ...
48	2022-07-25 04:35:25.925932	35	Post ...
49	2022-07-25 05:59:55.059458	35	Post ...
50	2022-07-25 06:00:43.392531	35	Post ...
51	2022-07-25 06:16:16.253272	35	Post ...
52	2022-07-25 06:21:42.689838	35	Post ...
53	2022-07-25 06:22:04.66404	35	Post ...
54	2022-07-25 06:27:41.798618	35	Post ...
55	2022-07-25 06:36:26.21666	35	Post ...
56	2022-07-25 06:38:03.709147	35	Post .d..
57	2022-07-25 06:38:48.822419	35	Post ...
58	2022-07-25 06:41:36.207871	35	Post ...
59	2022-07-25 06:43:36.632783	35	Post ...
60	2022-07-25 06:50:01.48808	35	Post ...
61	2022-07-25 14:59:35.376125	35	Post ...
62	2022-07-25 15:04:42.159638	35	Post ...
63	2022-07-25 15:15:31.555945	35	xxx
64	2022-07-25 15:17:08.534765	35	yyyyy
65	2022-07-25 15:19:43.99626	35	Post ...
66	2022-07-25 15:23:35.736922	35	Post ...
67	2022-07-25 15:26:41.481128	35	Post ...
68	2022-07-25 15:30:00.863086	35	Post ...
69	2022-07-25 15:43:53.02853	35	Post ...
70	2022-07-25 15:44:23.430555	35	Post ...
71	2022-07-25 15:46:37.491082	35	Post ...
72	2022-07-25 15:47:49.01877	35	Post ...
73	2022-07-25 15:51:29.242087	35	Post ...
74	2022-07-25 15:53:42.46903	35	Post ...
75	2022-07-25 15:54:18.243614	35	Post ...
\.


--
-- TOC entry 3142 (class 0 OID 16748)
-- Dependencies: 241
-- Data for Name: rel_user_permission; Type: TABLE DATA; Schema: challenge; Owner: sa
--

COPY challenge.rel_user_permission (id_user, id_permission) FROM stdin;
35	1
35	2
35	3
36	1
36	2
36	3
\.


--
-- TOC entry 3131 (class 0 OID 16545)
-- Dependencies: 217
-- Data for Name: rol; Type: TABLE DATA; Schema: challenge; Owner: sa
--

COPY challenge.rol (id_rol, name) FROM stdin;
1	Admin
2	Standard user
\.


--
-- TOC entry 3133 (class 0 OID 16567)
-- Dependencies: 219
-- Data for Name: user; Type: TABLE DATA; Schema: challenge; Owner: sa
--

COPY challenge."user" (id_user, name, email, password, id_rol) FROM stdin;
60	x7	_623@challengeaddika.com	$2a$10$6yWxp8ODvn8jvP2ZrasQEei2FebhM3QVxJgEow8pLuMpkE5JiNlZa	2
76	x7	_227@challengeaddika.com	$2a$10$5Y5nkJzwSduI6JaO9gghB.e9uksYZaS/zwvxFgPL9NibMU8QcFeGi	2
61	x7	_425@challengeaddika.com	$2a$10$lrgxZ658GQJrM.pMh1E30elam4TBEYlUQQicFmN.0XHdyqXZJG/eS	2
84	x7	_938@challengeaddika.com	$2a$10$nuT/kIfvLBPnSW5C1lz7LeFujJPwHAom3kvLmPoU4PQw/pkztMo.S	2
62	x7	_652@challengeaddika.com	$2a$10$gEBuPXNUa34irz0RWoxMw.z2hG9cQwMe8NAENh8AVOHxGEHANt4KK	2
77	x7	_478@challengeaddika.com	$2a$10$rMm5kEVID48Zf52Gmf/w5evYHKgzuAbpfX492A4RQg.BBZXyMZZky	2
41	x7	_871.2343408060989@challengeaddika.com	$2a$10$sQe3Zl0O3kOgorKdh.hZ1.WLwb61kthZaYvX8RZOywnGwYi2R/9Rq	2
42	x7	_247@challengeaddika.com	$2a$10$ulTweCDgHneTcUDWNCExpuRXRxSRdHnHd8SlzzgFvRZlCLYrqbNL2	2
63	x7	_662@challengeaddika.com	$2a$10$b9kBTxkQnYPjSCuPvlHxg.stklizQdvg1skFF/t/WyImFbKtuRieu	2
43	x7	_584@challengeaddika.com	$2a$10$9zg6wRtOSq180Wr5XyAsv.gCTWrzbw0k8ang2gPoXI47VndjYZUUS	2
34	usuarioest2	usuarioest2@addika.com	$2a$10$y.AWDBf2hlxHVAnW647KIOlJxvOa2dnn20APQS/VeCgQnarw2Lp7q	2
44	x7	_52@challengeaddika.com	$2a$10$40TTHb9As2eB6hflGiL6pOafKy.J3B9.zDcYjmbmhSNE/3aPfdrWS	2
64	x7	_291@challengeaddika.com	$2a$10$0DvJJjhsDxFAkhL9KJom/uYgD5OBw8TJhvVIskUqeGAyteNZ5IW8W	2
45	x7	_391@challengeaddika.com	$2a$10$jLyP3hpM5snC6I8hCe.Sq.LOLEnfjS/4JSoRqhZwqCk/39SE6jhN2	2
78	x7	_671@challengeaddika.com	$2a$10$IX9DfMzH9InSfYaH.7MTyuhAVsCMIqr0Kg4QcR2eILovyB3l9h17y	2
65	x7	_228@challengeaddika.com	$2a$10$46F43hzwCG00EUUo.4sIdOKYqQwP.f1hvKwY1y423x3F3qGEDwTZC	2
46	x7	_365@challengeaddika.com	$2a$10$wDHqh9F4X8kKDY1LeUByROuRswmEcPRf5V/X96LLqizJtfphzbM7C	2
66	x7	_414@challengeaddika.com	$2a$10$4crf.O/fR.h84g46gMF6we.03tyHcWGcfD0d2dqiYHiW2AhC4e/LK	2
79	x7	_538@challengeaddika.com	$2a$10$4ez3IjDM/53lL7SroE4dDut9fywJTniIvNfkGz.dUikJnEU6SCYxG	2
67	x7	_369@challengeaddika.com	$2a$10$3shCNWvs3.eN/XBB5cKyi.dsf0x9bFcscnOvFP7GHwYG7nfG7TNre	2
47	x7	_569@challengeaddika.com	$2a$10$nrnJTMT42CkajKcu214lveIc5cLSyXQzNWYXSlpsFA6KkhjvpEgpq	2
68	x7	_735@challengeaddika.com	$2a$10$Bzl4yVhpYONc6f5ZKfrSzuIR9/zvKgwcC6cIbIa21N1sT/HQsmKNi	2
48	x7	_941@challengeaddika.com	$2a$10$pHo1B3PNg5I31APA8AtFN.TCV/E3SNTQF/NGLTmINz5eGKqCtt9bi	2
49	x7	_651@challengeaddika.com	$2a$10$cmw0Gy0U5BmCofDaEwp6YeCu6VCt/nnPSjg8.lfGeKsXZgofAYCoe	2
80	x7	_71@challengeaddika.com	$2a$10$BxKZQtAEQ6Vq8W.YHiWXFuTeIL9Fjqt7Am0FXD.4CsIhwBayGPMBi	2
50	x7	_278@challengeaddika.com	$2a$10$WVLXkdM3Jy4jdDkMdPEfY.Uu6aWfr3m.sgNZXZRIWnkfEE4Z2Tqiq	2
69	x7	_599@challengeaddika.com	$2a$10$qU.IkwwQ34Y2rf.IGHBvyuMDhcRBcsTqUgkflS9F6bYP.vLnKKIJi	2
51	x7	_81@challengeaddika.com	$2a$10$FQKOpyyzvRWHBncTiHf6Y.RQI6X5Qq88LT6xi7.LmrJ6sw7D8ly3a	2
70	x7	_89@challengeaddika.com	$2a$10$KrguLF5rO48eN28fVJGyVeFhFHlPGuqiMDIybrawDB5YFPrnLo/o.	2
52	x7	_292@challengeaddika.com	$2a$10$4C/.FJ6INboRj8/nJTddA.aafAOMG7lLcX8bShI99qh1V4I9V0ubq	2
81	x7	_113@challengeaddika.com	$2a$10$GA6DWyv5KT7o4HtNas/yfOfXw4ni.lH2tzdULzke3x4dEVnw.Xpku	2
53	x7	_682@challengeaddika.com	$2a$10$qau2KWMGePeuXrzo7.fJm.nvaaIXb6/1ODP5LuPO7JyMrcuhQi9LS	2
71	x7	_211@challengeaddika.com	$2a$10$SQcLmGFHr5nvbrWQtmHW2uvtzayO7/lmSSOXVu4yrLg.wreNO2Qem	2
36	x3	x3@addika.com	$2a$10$3QE6Bh.D/NigtI9b3BcRHOgbGIq.uvX7PSDqOp8wcrWtM0YgcgFsC	2
54	x7	_329@challengeaddika.com	$2a$10$7xPwsL8T5XFhuoXL0E3zWOcSgFnb8WLCkoxPVjR80DTGPZfPxBsBO	2
35	Admin	x1@addika.com	$2a$10$eRIrUH7eujyClGXred3uPeY.IaRZoM9fYb8B3bQMnZbU7Q3b3NzGC	1
55	x7	_145@challengeaddika.com	$2a$10$sjSt50hI0AaWsWA4spfPUOpQ90qTTsiXj1aYmuopSYlMINC9Z5RZS	2
72	x7	_434@challengeaddika.com	$2a$10$lPoeK3Ti8dc9ws655f./f.H/2StJMqVVSOu5DcgowJJUXDwwijwxG	2
38	x5	x5@addika.com	$2a$10$aQ9O/.IbNTfMP15fUtEupO1KupNTEtjKQqo9hbskLACA4KAuOqnUC	2
39	x6	x6@addika.com	$2a$10$SuLczHSA92iBYUFBG/9f..PjE2IR/XyuVzW/fMahdDBF0WmNvDVKu	2
56	x7	_680@challengeaddika.com	$2a$10$6SQU9o0KO6nQPyet3z9VfOAG/RbNyUeGcx1Ste1kYouvWGudsRSn2	2
40	x7	x7@addika.com	$2a$10$oiPueeOyYhuoFxNfEdlLaeNNwRXoU3lRIs5Et9NVLo3aM.FeiyDSe	2
82	x7	_759@challengeaddika.com	$2a$10$5PejaRzroVzGw1UqvFQK0uQv6BPmLGgmXzcyLJyRD0AVT.iF8lwua	2
57	x7	_496@challengeaddika.com	$2a$10$7LVZC6T5brB7wXL7dXrV2Ob8jmuC1AmFRvxUeoSfhTonsIgVWK7tq	2
58	x7	_383@challengeaddika.com	$2a$10$i/1YthHxYhLc4TrGRwv3TuJOeD9CpU9aUmiin6Xt1QnEZ1H5jELWG	2
73	x7	_487@challengeaddika.com	$2a$10$liuSdZ6MnDSey3tLGPY8leMDMenInrXCHBp2k4OoOjVbx50uM1.7u	2
59	x7	_121@challengeaddika.com	$2a$10$TbM5yiz8h4htXGA4K/ZFEurqgMXkmzZDeZOuK5UNyomEsHv59513m	2
83	x7	_542@challengeaddika.com	$2a$10$U.2huHb3EIiKxVjLtoK8O.rfKjdeJNbaoAEENcvJaFziBPOmEzpqa	2
74	x7	_460@challengeaddika.com	$2a$10$5E.ad25rxeNlJO3lKKhJKOj0xc5cPAMJEyBCkaoRbv8h8OHHl4fku	2
75	x7	_359@challengeaddika.com	$2a$10$ZiYAQTwHk8RLiGBzC0Bz4OuurUxAPlodPMKxnwQWp0YN6GYXxoyOK	2
\.


--
-- TOC entry 3154 (class 0 OID 0)
-- Dependencies: 220
-- Name: comment_id_comment_seq; Type: SEQUENCE SET; Schema: challenge; Owner: sa
--

SELECT pg_catalog.setval('challenge.comment_id_comment_seq', 70, true);


--
-- TOC entry 3155 (class 0 OID 0)
-- Dependencies: 239
-- Name: log_id_log_seq; Type: SEQUENCE SET; Schema: challenge; Owner: sa
--

SELECT pg_catalog.setval('challenge.log_id_log_seq', 140, true);


--
-- TOC entry 3156 (class 0 OID 0)
-- Dependencies: 224
-- Name: permission_id_permission_seq; Type: SEQUENCE SET; Schema: challenge; Owner: sa
--

SELECT pg_catalog.setval('challenge.permission_id_permission_seq', 3, true);


--
-- TOC entry 3157 (class 0 OID 0)
-- Dependencies: 222
-- Name: post_id_post_seq; Type: SEQUENCE SET; Schema: challenge; Owner: sa
--

SELECT pg_catalog.setval('challenge.post_id_post_seq', 75, true);


--
-- TOC entry 3158 (class 0 OID 0)
-- Dependencies: 216
-- Name: rol_id_rol_seq; Type: SEQUENCE SET; Schema: challenge; Owner: sa
--

SELECT pg_catalog.setval('challenge.rol_id_rol_seq', 2, true);


--
-- TOC entry 3159 (class 0 OID 0)
-- Dependencies: 218
-- Name: user_id_user_seq; Type: SEQUENCE SET; Schema: challenge; Owner: sa
--

SELECT pg_catalog.setval('challenge.user_id_user_seq', 84, true);


--
-- TOC entry 2985 (class 2606 OID 16586)
-- Name: comment comment_pkey; Type: CONSTRAINT; Schema: challenge; Owner: sa
--

ALTER TABLE ONLY challenge.comment
    ADD CONSTRAINT comment_pkey PRIMARY KEY (id_comment);


--
-- TOC entry 2991 (class 2606 OID 16717)
-- Name: log log_pkey; Type: CONSTRAINT; Schema: challenge; Owner: sa
--

ALTER TABLE ONLY challenge.log
    ADD CONSTRAINT log_pkey PRIMARY KEY (id_log);


--
-- TOC entry 2989 (class 2606 OID 16605)
-- Name: permission permission_pkey; Type: CONSTRAINT; Schema: challenge; Owner: sa
--

ALTER TABLE ONLY challenge.permission
    ADD CONSTRAINT permission_pkey PRIMARY KEY (id_permission);


--
-- TOC entry 2987 (class 2606 OID 16594)
-- Name: post post_pkey; Type: CONSTRAINT; Schema: challenge; Owner: sa
--

ALTER TABLE ONLY challenge.post
    ADD CONSTRAINT post_pkey PRIMARY KEY (id_post);


--
-- TOC entry 2993 (class 2606 OID 16752)
-- Name: rel_user_permission rel_user_permission_pkey; Type: CONSTRAINT; Schema: challenge; Owner: sa
--

ALTER TABLE ONLY challenge.rel_user_permission
    ADD CONSTRAINT rel_user_permission_pkey PRIMARY KEY (id_user, id_permission);


--
-- TOC entry 2980 (class 2606 OID 16553)
-- Name: rol rol_pkey; Type: CONSTRAINT; Schema: challenge; Owner: sa
--

ALTER TABLE ONLY challenge.rol
    ADD CONSTRAINT rol_pkey PRIMARY KEY (id_rol);


--
-- TOC entry 2983 (class 2606 OID 16575)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: challenge; Owner: sa
--

ALTER TABLE ONLY challenge."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id_user);


--
-- TOC entry 2981 (class 1259 OID 16727)
-- Name: user_email.UN; Type: INDEX; Schema: challenge; Owner: sa
--

CREATE UNIQUE INDEX "user_email.UN" ON challenge."user" USING btree (email);


--
-- TOC entry 2996 (class 2606 OID 16695)
-- Name: comment comment_commentparentfk; Type: FK CONSTRAINT; Schema: challenge; Owner: sa
--

ALTER TABLE ONLY challenge.comment
    ADD CONSTRAINT comment_commentparentfk FOREIGN KEY (id_comment_parent) REFERENCES challenge.comment(id_comment);


--
-- TOC entry 2995 (class 2606 OID 16690)
-- Name: comment comment_postfk; Type: FK CONSTRAINT; Schema: challenge; Owner: sa
--

ALTER TABLE ONLY challenge.comment
    ADD CONSTRAINT comment_postfk FOREIGN KEY (id_post) REFERENCES challenge.post(id_post);


--
-- TOC entry 2997 (class 2606 OID 16705)
-- Name: post post_userfk; Type: FK CONSTRAINT; Schema: challenge; Owner: sa
--

ALTER TABLE ONLY challenge.post
    ADD CONSTRAINT post_userfk FOREIGN KEY (id_user) REFERENCES challenge."user"(id_user);


--
-- TOC entry 2998 (class 2606 OID 16753)
-- Name: rel_user_permission reluserpermission_permissionfk; Type: FK CONSTRAINT; Schema: challenge; Owner: sa
--

ALTER TABLE ONLY challenge.rel_user_permission
    ADD CONSTRAINT reluserpermission_permissionfk FOREIGN KEY (id_permission) REFERENCES challenge.permission(id_permission);


--
-- TOC entry 2999 (class 2606 OID 16758)
-- Name: rel_user_permission reluserpermission_rolfk; Type: FK CONSTRAINT; Schema: challenge; Owner: sa
--

ALTER TABLE ONLY challenge.rel_user_permission
    ADD CONSTRAINT reluserpermission_rolfk FOREIGN KEY (id_user) REFERENCES challenge."user"(id_user);


--
-- TOC entry 2994 (class 2606 OID 16700)
-- Name: user user_rolfk; Type: FK CONSTRAINT; Schema: challenge; Owner: sa
--

ALTER TABLE ONLY challenge."user"
    ADD CONSTRAINT user_rolfk FOREIGN KEY (id_rol) REFERENCES challenge.rol(id_rol);


-- Completed on 2022-07-25 11:10:01

--
-- PostgreSQL database dump complete
--

