const app = require('../index');
const request = require('supertest');
const { validationBodyPostbyDate } = require('./src/validationBody');
const { validationBodyStorePost } = require('./src/validationBody');
const { validationAuthentication } = require('./src/validationAuthentication');

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


    it(validationAuthentication[0].label, async () => {

        for (const i in validationBodyStorePost) {

            await request(app)
                .post('/login')
                .send(validationAuthentication[0].test)
                .expect('Content-Type', /json/)
                .expect((res) => {
                    expect(res.body.status).toBe(validationAuthentication[0].response.status)
                })
        }
    })



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


