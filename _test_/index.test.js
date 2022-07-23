const app = require('../index');
const request = require('supertest');
const validationBody = require('./src/validationBody');

describe('Test endpoint Addika Challenge - Body Validation ', () => {

    for (const i in validationBody) {

        it(validationBody[i].label, async () => {
            await request(app)
                .post('/postsbydate')
                .send(validationBody[i].test)
                .expect('Content-Type', /json/)
                .expect((res) => {
                    expect(res.body.status).toEqual(validationBody[i].status)
                    expect(res.body.error_message[0].msg).toEqual(validationBody[i].error_message)
                })
        })

    }

})
