const invalidToken = 'Bearer JhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY29sb3JhZG8iLCJpZCI6MTYsImlhdCI6MTY1ODYxNjk2MSwiZXhwIjoxNjU5MjIxNzYxfQ.6EtrK49rjb__UZrrqe-JCurmW0R6ZDGWJjE7M47JPfI';
const validToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY29sb3JhZG8iLCJpZCI6MTYsImlhdCI6MTY1ODYxNjk2MSwiZXhwIjoxNjU5MjIxNzYxfQ.6EtrK49rjb__UZrrqe-JCurmW0R6ZDGWJjE7M47JPfI';

const app = require('../index');
const request = require('supertest');
const { validationGetPostsByDate,
  validationPosts,
  validationGet1Post,
  validationAddNewPostMissingParams,
  validationDeletePostOk,
  validationDeletePostMissinsParams,
  validationUpdatePostMissinsParams,
  validationUpdatePostOk,
  validationInvalidPermissionsToUpdatePost,
  validationAddNewPostOk } = require('./src/posts.test');

const { validationAuthentication,
  validationUsers,
  validationGetUser,
  validationUpdateUser,
  validationDeleteUser,
  validationAddUser } = require('./src/users.test');

const {
  validationAddPermission, validationDeletePermissions } = require('./src/permissions.test');


const { validationGetAllCommentsTokenInvalid,
  validationGetCommentsByPost,
  validationAddNewComment,
  validationGet1Comment,
  validationDeleteCommentOk,
  validationDeleteCommentMissingsParams,
  validationDeleteCommentPermissionsError,
  validationUpdateCommentMissingsParams,
  validationUpdateCommentOk,
  validationGetAllComments } = require('./src/comments.test');


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



describe('Test endpoint PERMISSIONS /permissions', () => {

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


  for (const i in validationDeletePermissions) {
    it(validationDeletePermissions[i].label, async () => {

      await request(app)
        .delete('/permissions')
        .send(validationDeletePermissions[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe(validationDeletePermissions[i].response.status)
        })
    })

  }

})

describe('Test endpoint POSTS /posts', () => {

  for (const i in validationPosts) {

    it(validationPosts[i].label, async () => {
      await request(app)
        .post('/posts')
        .send(validationPosts[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .expect(200)
        .expect((res) => {
        })
    })

  }

})


describe('Test endpoint POSTS get /posts/:id', () => {

  for (const i in validationGet1Post) {

    it(validationGet1Post[i].label, async () => {
      await request(app)
        .get('/posts/39')
        .send(validationGet1Post[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe(validationGet1Post[i].response.status)
        })
    })

  }

})


describe('Test endpoint POSTS /postsbydate', () => {

  for (const i in validationGetPostsByDate) {

    it(validationGetPostsByDate[i].label, async () => {
      await request(app)
        .post('/postsbydate')
        .send(validationGetPostsByDate[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .expect(200)
        .expect((res) => {
        })
    })

  }

})



describe('Test endpoint POSTS add new post  /posts', () => {

  for (const i in validationAddNewPostMissingParams) {

    it(validationAddNewPostMissingParams[i].label, async () => {
      await request(app)
        .post('/posts')
        .send(validationAddNewPostMissingParams[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect((res) => {
          expect(res.body.status).toBe(validationAddNewPostMissingParams[i].response.status)
        })
    })

  }


  for (const i in validationAddNewPostOk) {

    it(validationAddNewPostOk[i].label, async () => {
      await request(app)
        .post('/posts')
        .send(validationAddNewPostOk[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe(validationAddNewPostOk[i].response.status)
        })
    })

  }

})


describe('Test endpoint delete /posts', () => {

  for (const i in validationDeletePostMissinsParams) {

    it(validationDeletePostMissinsParams[i].label, async () => {
      await request(app)
        .delete('/posts')
        .send(validationDeletePostMissinsParams[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect((res) => {
          expect(res.body.status).toBe(validationDeletePostMissinsParams[i].response.status)
        })
    })

  }

  for (const i in validationDeletePostOk) {

    it(validationDeletePostOk[i].label, async () => {
      await request(app)
        .delete('/posts')
        .send(validationDeletePostOk[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe(validationDeletePostOk[i].response.status)
        })
    })

  }

})


describe('Test endpoint POSTS missings params update /posts', () => {

  for (const i in validationUpdatePostMissinsParams) {

    it(validationUpdatePostMissinsParams[i].label, async () => {
      await request(app)
        .put('/posts')
        .send(validationUpdatePostMissinsParams[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect((res) => {
          // console.log(`res.body = ${JSON.stringify(res.body)}`);
          expect(res.body.status).toBe(validationUpdatePostMissinsParams[i].response.status)
        })
    })

  }



  for (const i in validationUpdatePostOk) {

    it(validationUpdatePostOk[i].label, async () => {
      await request(app)
        .put('/posts')
        .send(validationUpdatePostOk[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe(validationUpdatePostOk[i].response.status)
        })
    })

  }


  for (const i in validationInvalidPermissionsToUpdatePost) {

    it(validationInvalidPermissionsToUpdatePost[i].label, async () => {
      await request(app)
        .put('/posts')
        .send(validationInvalidPermissionsToUpdatePost[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect((res) => {
          expect(res.body.status).toBe(validationInvalidPermissionsToUpdatePost[i].response.status)
        })
    })

  }

})



//  COMMENTS

describe('Test endpoint COMMENTS /comments', () => {

  for (const i in validationGetAllComments) {

    it(validationGetAllComments[i].label, async () => {
      await request(app)
        .get('/comments')
        .send(validationGetAllComments[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect(200)
        .expect((res) => {
          // console.log(`res.body = ${JSON.stringify(res.body)}`);
        })
    })

  }

  for (const i in validationGetAllCommentsTokenInvalid) {

    it(validationGetAllCommentsTokenInvalid[i].label, async () => {
      await request(app)
        .get('/comments')
        .send(validationGetAllCommentsTokenInvalid[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', invalidToken)
        .expect(200)
        .expect((res) => {
          // console.log(`res.body = ${JSON.stringify(res.body)}`);
          // expect(res.body.status).toBe(validationGetAllCommentsTokenInvalid[i].response.status)
        })
    })

  }


})

describe('Test endpoint COMMENTS /commentsbypost', () => {

  for (const i in validationGetCommentsByPost) {

    it(validationGetCommentsByPost[i].label, async () => {
      await request(app)
        .post('/commentsbypost')
        .send(validationGetCommentsByPost[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect(200)
        .expect((res) => {
          // console.log(`res.body = ${JSON.stringify(res.body)}`);
          expect(res.body.status).toBe(validationGetCommentsByPost[i].response.status)
        })
    })

  }

})


describe('Test endpoint COMMENTS post /comments', () => {

  for (const i in validationAddNewComment) {

    it(validationAddNewComment[i].label, async () => {
      await request(app)
        .post('/comments')
        .send(validationAddNewComment[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe(validationAddNewComment[i].response.status)
        })
    })

  }

})



describe('Test endpoint COMMENTS post /comments/:id', () => {

  for (const i in validationGet1Comment) {

    it(validationGet1Comment[i].label, async () => {
      await request(app)
        .get('/comments/24')
        .send(validationGet1Comment[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect(200)
        .expect((res) => {
          // console.log(`res.body = ${JSON.stringify(res.body)}`);
          expect(res.body.status).toBe(validationGet1Comment[i].response.status)
        })
    })

  }

})




describe('Test endpoint COMMENTS delete /comments', () => {

  for (const i in validationDeleteCommentMissingsParams) {

    it(validationDeleteCommentMissingsParams[i].label, async () => {
      await request(app)
        .delete('/comments')
        .send(validationDeleteCommentMissingsParams[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe(validationDeleteCommentMissingsParams[i].response.status)
        })
    })

  }


  for (const i in validationDeleteCommentOk) {

    it(validationDeleteCommentOk[i].label, async () => {
      await request(app)
        .delete('/comments')
        .send(validationDeleteCommentOk[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe(validationDeleteCommentOk[i].response.status)
        })
    })

  }


  for (const i in validationDeleteCommentPermissionsError) {

    it(validationDeleteCommentPermissionsError[i].label, async () => {
      await request(app)
        .delete('/comments')
        .send(validationDeleteCommentPermissionsError[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe(validationDeleteCommentPermissionsError[i].response.status)
        })
    })

  }

})




describe('Test endpoint COMMENTS delete /comments', () => {

  for (const i in validationDeleteCommentMissingsParams) {

    it(validationDeleteCommentMissingsParams[i].label, async () => {
      await request(app)
        .delete('/comments')
        .send(validationDeleteCommentMissingsParams[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe(validationDeleteCommentMissingsParams[i].response.status)
        })
    })

  }


  for (const i in validationDeleteCommentOk) {

    it(validationDeleteCommentOk[i].label, async () => {
      await request(app)
        .delete('/comments')
        .send(validationDeleteCommentOk[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe(validationDeleteCommentOk[i].response.status)
        })
    })

  }


  for (const i in validationDeleteCommentPermissionsError) {

    it(validationDeleteCommentPermissionsError[i].label, async () => {
      await request(app)
        .delete('/comments')
        .send(validationDeleteCommentPermissionsError[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe(validationDeleteCommentPermissionsError[i].response.status)
        })
    })

  }

})


describe('Test endpoint COMMENTS update /comments', () => {

  for (const i in validationUpdateCommentMissingsParams) {

    it(validationUpdateCommentMissingsParams[i].label, async () => {
      await request(app)
        .put('/comments')
        .send(validationUpdateCommentMissingsParams[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe(validationUpdateCommentMissingsParams[i].response.status)
        })
    })

  }


  for (const i in validationUpdateCommentOk) {

    it(validationUpdateCommentOk[i].label, async () => {
      await request(app)
        .put('/comments')
        .send(validationUpdateCommentOk[i].test)
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .set('Authorization', validToken)
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe(validationUpdateCommentOk[i].response.status)
        })
    })

  }



})