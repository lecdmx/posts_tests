
exports.validationGetAllLogsMissingsParams = [
  {
    label: 'Validation: Missings params',
    test: {
    },
    response: {
      "message": {},
      "error_message": {
        "message": {},
        "error_message": [
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
      "status": false
    }
  }
];



exports.validationGetAllLogs = [
  {
    label: 'Validation: Get logs successfully',
    test: {
      "id_user_loged": 35
    },
    response: {
      "message": {},
      "results": [
        {
          "id_log": 1,
          "id_user": 1,
          "id_post": 7,
          "content": "Usuario 1 creó Post 7"
        }
      ],
      "error_message": {},
      "status": true
    }
  }
];


exports.validationGetAllLogsInvalidToken = [
  {
    label: 'Validation: Get logs error invalid token',
    test: {
      "id_user_loged": 35
    },
    response: {
      "message": {},
      "error_message": "Token missing or invalid",
      "status": false
    }
  }
];


exports.validationGetAllLogsInvalidPermissions = [
  {
    label: 'Validation: Get logs error permissions invalids',
    test: {
      "id_user_loged": 40
    },
    response: {
      "message": {},
      "error_message": "Invalid permissions",
      "status": false
    }
  }
];