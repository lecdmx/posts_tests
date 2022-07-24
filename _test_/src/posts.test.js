

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
    label: 'Test: Invalid permissions',
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
    label: 'Test: Valid permissions',
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
    label: 'Test: Results ok',
    test: {
      "id_user_loged": 35
    },
    response: [
      {
        "message": {},
        "results": [
          {
            "id_user": 35,
            "name": "Admin",
            "email": "x1@addika.com",
            "id_rol": 1
          },
          {
            "id_user": 36,
            "name": "x3",
            "email": "x3@addika.com",
            "id_rol": 2
          },
          {
            "id_user": 34,
            "name": "usuarioest1",
            "email": "usuarioest2@addika.com",
            "id_rol": 2
          }
        ],
        "error_message": {},
        "status": true
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

  {
    label: 'Test: Invalid permissions',
    test: {
      "id_user_loged": 32,
      "id_user": 35
    },
    response: {
      "message": {},
      "error_message": "Invalid permissions",
      "status": false
    },
    "status": false
  },
  {
    label: 'Test: Results ok',
    test: {
      "id_user_loged": 35,
      "id_user": 35
    },
    response: {
      "message": {},
      "results":
      {
        "id_user": 35,
        "name": "Admin",
        "email": "x1@addika.com",
        "id_rol": 1
      },
      "error_message": {},
      "status": true
    }
  },
]
