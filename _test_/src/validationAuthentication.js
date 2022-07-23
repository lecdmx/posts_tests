
const invalidToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY29sb3JhZG8iLCJpZCI6MTYsImlhdCI6MTY1ODYxNjk2MSwiZXhwIjoxNjU5MjIxNzYxfQ.6EtrK49rjb__UZrrqe-JCurmW0R6ZDGWJjE7M47JPfI';
const validToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY29sb3JhZG8iLCJpZCI6MTYsImlhdCI6MTY1ODYxNzAwNSwiZXhwIjoxNjU5MjIxODA1fQ.2MdlNfyibkDrZCIvwACnWD19_uQ4dGcaHAdR_GGHq4Y';

exports.validationAuthentication = [
  {
    label: 'Test: Validate login error',
    test: {
      "email": "colorados_@dos.com",
      "password": "colorados"
    },
    response: {
      "message": "Login failed",
      "error_message": "User not found",
      "status": false,
      "login": false
    }
  },
  {
    label: 'Test: Validate login ok',
    test: {
      "email": "colorados@dos.com",
      "password": "colorados"
    },
    response: {
      "error_message": {},
      "results": {
        "token": "eyJhbG..."
      },
      "status": true
    }
  },

]

