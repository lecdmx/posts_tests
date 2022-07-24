const app = require('../index');
const request = require('supertest');
const { validationBodyPostbyDate } = require('./src/validationBody');
const { validationBodyStorePost } = require('./src/validationBody');
const { validationAuthentication, validationUsers, validationGetUser } = require('./src/users.test');

// describe('Test endpoint Addika Challenge - Body validation ', () => {

// for (const i in validationBodyPostbyDate) {

//     it(validationBodyPostbyDate[i].label, async () => {
//         await request(app)
//             .post('/postsbydate')
//             .send(validationBodyPostbyDate[i].test)
//             .expect('Content-Type', /json/)
//             .expect((res) => {
//                 expect(res.body.status).toEqual(validationBodyPostbyDate[i].status)
//                 expect(res.body.error_message[0].msg).toEqual(validationBodyPostbyDate[i].error_message)
//             })
//     })

// }

// })


// Validate login
describe('Test endpoint Addika Challenge - Authentication validation', () => {

    console.log(`validationAuthentication ${JSON.stringify(validationAuthentication)}`);

    for (const i in validationAuthentication) {
        it(validationAuthentication[i].label, async () => {

            await request(app)
                .post('/login')
                .send(validationAuthentication[i].test)
                .expect('Content-Type', /json/)
                .expect((res) => {
                    expect(res.body.status).toBe(validationAuthentication[i].response.status)
                })
        })

    }


})


describe('Test endpoint Addika Challenge - Users validation', () => {

    console.log(`validationUsers ${JSON.stringify(validationUsers)}`);

    for (const i in validationUsers) {
        it(validationUsers[i].label, async () => {

            await request(app)
                .post('/users')
                .send(validationUsers[i].test)
                .expect('Content-Type', /json/)
                .expect((res) => {
                    expect(res.body.status).toBe(validationUsers[i].response.status)
                })
        })

    }

    for (const i in validationGetUser) {
        it(validationGetUser[i].label, async () => {

            await request(app)
                .post('/getUser')
                .send(validationGetUser[i].test)
                .expect('Content-Type', /json/)
                .expect((res) => {
                    expect(res.body.status).toBe(validationGetUser[i].response.status)
                })
        })

    }


})



    // for (const i in validationBodyStorePost) {

    //     it(validationBodyStorePost[i].label, async () => {
    //         await request(app)
    //             .post('/posts')
    //             .send(validationBodyStorePost[i].test)
    //             .expect('Content-Type', /json/)
    //             .expect((res) => {
    //                 expect(res.body.status).toEqual(validationBodyStorePost[i].status)
    //                 expect(res.body.error_message[0].msg).toEqual(validationBodyStorePost[i].error_message)
    //             })
    //     })

    // }


