const invalidToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY29sb3JhZG8iLCJpZCI6MTYsImlhdCI6MTY1ODYxNjk2MSwiZXhwIjoxNjU5MjIxNzYxfQ.6EtrK49rjb__UZrrqe-JCurmW0R6ZDGWJjE7M47JPfI';
const validToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieDEiLCJpZCI6MzUsImlkX3JvbCI6MSwiaWF0IjoxNjU4NjI0NTcxLCJleHAiOjE2NjcyNjQ1NzF9._vInTjI0eJmsw4pziiATc3_TdBn0TLhW8JMZgnQTBD8';
const app = require('../index');
const request = require('supertest');
const { validationBodyPostbyDate } = require('./src/validationBody');
const { validationBodyStorePost } = require('./src/validationBody');

const { validationAuthentication,
    validationUsers,
    validationGetUser,
    validationUpdateUser,
    validationDeleteUser,
    validationAddUser } = require('./src/users.test');

const {
    validationAddPermission } = require('./src/permissions.test');


// Validate login
describe('Test endpoint /login', () => {

    for (const i in validationAuthentication) {
        it(validationAuthentication[i].label, async () => {

            await request(app)
                .post('/login')
                .send(validationAuthentication[i].test)
                .expect('Content-Type', /json/)
                .set('Accept', 'application/json')
                .set('Authorization', validToken)
                .expect(200)
                .expect((res) => {
                    expect(res.body.status).toBe(validationAuthentication[i].response.status)
                })
        })

    }


})


describe('Test endpoint USERS /users', () => {

    for (const i in validationUsers) {
        it(validationUsers[i].label, async () => {

            await request(app)
                .post('/users')
                .send(validationUsers[i].test)
                .expect('Content-Type', /json/)
                .set('Accept', 'application/json')
                .set('Authorization', validToken)
                .expect(200)
                .expect((res) => {
                })
        })

    }
})

describe('Test endpoint USERS /getUser', () => {

    for (const i in validationGetUser) {
        it(validationGetUser[i].label, async () => {

            await request(app)
                .post('/getUser')
                .send(validationGetUser[i].test)
                .expect('Content-Type', /json/)
                .set('Accept', 'application/json')
                .set('Authorization', validToken)
                .expect(200)
                .expect((res) => {
                })
        })

    }

})

describe('Test endpoint USERS /saveUser', () => {

    for (const i in validationAddUser) {
        it(validationAddUser[i].label, async () => {

            await request(app)
                .post('/saveUser')
                .send(validationAddUser[i].test)
                .expect('Content-Type', /json/)
                .set('Accept', 'application/json')
                .set('Authorization', validToken)
                .expect(200)
                .expect((res) => {
                    expect(res.body.status).toBe(validationAddUser[i].response.status)
                })
        })

    }

})


describe('Test endpoint USERS update /users', () => {

    for (const i in validationUpdateUser) {
        it(validationUpdateUser[i].label, async () => {

            await request(app)
                .put('/users')
                .send(validationUpdateUser[i].test)
                .expect('Content-Type', /json/)
                .set('Accept', 'application/json')
                .set('Authorization', validToken)
                .expect(200)
                .expect((res) => {
                    expect(res.body.status).toBe(validationUpdateUser[i].response.status)
                })
        })

    }

})

describe('Test endpoint USERS delete /users', () => {

    for (const i in validationDeleteUser) {
        it(validationDeleteUser[i].label, async () => {

            await request(app)
                .delete('/users/37')
                .send(validationDeleteUser[i].test)
                .expect('Content-Type', /json/)
                .set('Accept', 'application/json')
                .set('Authorization', validToken)
                .expect(200)
                .expect((res) => {
                })
        })

    }

})



describe('Test endpoint PERMISSIONS update /permissions', () => {

    for (const i in validationAddPermission) {
        it(validationAddPermission[i].label, async () => {

            await request(app)
                .post('/permissions')
                .send(validationAddPermission[i].test)
                .expect('Content-Type', /json/)
                .set('Accept', 'application/json')
                .set('Authorization', validToken)
                .expect(200)
                .expect((res) => {
                    expect(res.body.status).toBe(validationAddPermission[i].response.status)
                })
        })

    }

})

describe('Test endpoint PERMISSIONS delete /permissions', () => {

    for (const i in validationAddPermission) {
        it(validationAddPermission[i].label, async () => {

            await request(app)
                .post('/permissions')
                .send(validationAddPermission[i].test)
                .expect('Content-Type', /json/)
                .set('Accept', 'application/json')
                .set('Authorization', validToken)
                .expect(200)
                .expect((res) => {
                    expect(res.body.status).toBe(validationAddPermission[i].response.status)
                })
        })

    }

})

describe('Test endpoint POSTS /postsbydate', () => {

    for (const i in validationBodyPostbyDate) {

        it(validationBodyPostbyDate[i].label, async () => {
            await request(app)
                .post('/postsbydate')
                .send(validationBodyPostbyDate[i].test)
                .expect('Content-Type', /json/)
                .expect((res) => {
                })
        })

    }

})



describe('Test endpoint POSTS /posts', () => {

    for (const i in validationBodyStorePost) {

        it(validationBodyStorePost[i].label, async () => {
            await request(app)
                .post('/posts')
                .send(validationBodyStorePost[i].test)
                .expect('Content-Type', /json/)
                .expect((res) => {
                })
        })

    }

})

