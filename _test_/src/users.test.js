exports.validationAuthentication = [
  {
    label: 'Test: Validate missing params',
    test: {
      "email": "colorados_@dos.com"
    },
    response: {
      "message": "Login failed",
      "error_message": "User not found",
      "status": false,
      "login": false
    }
  },
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
    label: 'Test: Validate missing params',
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
    label: 'Test: Validate missing params',
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



exports.validationAddUser = [

  {
    label: 'Test: Validate missing params',
    test: {
      "name": "x4",
      "password": "x4",
      "id_rol": 2,
      "id_user_loged": 35
    },
    response: {
      "message": {},
      "error_message": [
        {
          "msg": "email is a required parameter",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "email must be a valid email address",
          "param": "email",
          "location": "body"
        }
      ],
      "status": false
    }
  },


  {
    label: 'Test: Add new user successfully',
    test: {
      "name": "x7",
      "email": `_${Math.round(Math.random() * 1000 + 1)}@challengeaddika.com`,
      "password": "x7",
      "id_rol": 2,
      "id_user_loged": 35
    },
    response: {
      "message": {
        "generated_id": 38
      },
      "error_message": {},
      "status": true
    }
  },

  {
    label: 'Test: Fail on add new user',
    test: {
      "name": "x7",
      "email": "x7@addika.com",
      "password": "x7",
      "id_rol": 2,
      "id_user_loged": 35
    },
    response: {
      "message": {
        "generated_id": 38
      },
      "error_message": {},
      "status": false
    }
  },

]



exports.validationUpdateUser = [

  {
    label: 'Test: Validate missing params',
    test: {
      "id_rol": 2,
      "id_user_loged": 35,
      "id_user": 34
    },
    response: {
      "message": {},
      "error_message": [
        {
          "msg": "email is a required parameter",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "email must be a valid email address",
          "param": "email",
          "location": "body"
        }
      ],
      "status": false
    }
  },


  {
    label: 'Test: Update user successfully',
    test: {
      "name": "usuarioest2",
      "email": "usuarioest2@addika.com",
      "id_rol": 2,
      "id_user_loged": 35,
      "id_user": 34
    },
    response: {
      "message": {
        "generated_id": 38
      },
      "error_message": {},
      "status": true
    }
  },

]


exports.validationDeleteUser = [
  {
    label: 'Test: Validate missing params',
    test: {
    },
    response: {
      "message": {},
      "error_message":  [
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
    }
  },


  {
    label: 'Test: Delete user successfully',
    test: {
      "name": "usuarioest2",
      "email": "usuarioest2@addika.com",
      "id_rol": 2,
      "id_user_loged": 35,
      "id_user": 34
    },
    response: {
      "message": {
        "generated_id": 38
      },
      "error_message": {},
      "status": true
    }
  },



]