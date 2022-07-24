
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
      "email": "x1@addika.com",
      "password": "x1"
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

exports.validationUsers = [

  {
    label: 'Test: Validate missig params',
    test: {
    },
    response: [
      {
        "msg": "id_user_loged is a required parameter",
        "param": "id_user_loged",
        "location": "body"
      },
      {
        "msg": "id_user_loged must be a number",
        "param": "id_user_loged",
        "location": "body"
      }
    ],
    "status": false
  },

  {
    label: 'Test: Invalid permissions in /users',
    test: {
      "id_user_loged": 33
    },
    response: [
      {
        "message": {},
        "error_message": "Invalid permissions",
        "status": false
      }
    ],
    "status": false
  },

  {
    label: 'Test: Valid permissions in /users',
    test: {
      "id_user_loged": 33
    },
    response: [
      {
        "message": {},
        "error_message": "Invalid permissions",
        "status": false
      }
    ],
    "status": true
  },

]



exports.validationGetUser = [

  {
    label: 'Test: Validate missig params',
    test: {
      "id_user_loged": 35
    },
    response: [
      {
        "msg": "id_user is a required parameter",
        "param": "id_user",
        "location": "body"
      },
      {
        "msg": "id_user must be a number",
        "param": "id_user",
        "location": "body"
      }
    ],
    "status": false
  },


]
