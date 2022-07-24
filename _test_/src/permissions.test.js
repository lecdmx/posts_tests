

exports.validationAddPermission = [

  {
    label: 'Test: Validate missing params',
    test: {
      "id_user_loged": 35,
      "id_user": 36
    },
    response: {
      "message": {},
      "error_message": [
        {
          "msg": "id_permission is a required parameter",
          "param": "id_permission",
          "location": "body"
        },
        {
          "msg": "id_permission must be a number",
          "param": "id_permission",
          "location": "body"
        }
      ],
      "status": false
    }
  },


  {
    label: 'Test: Add new permission successfully',
    test: {
      "id_user_loged": 35,
      "id_user": 36,
      "id_permission": 3
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
    label: 'Test: Fail on add new permission',
    test: {
      "id_user_loged": 35,
      "id_user": 35,
      "id_permission": 5
    },
    response: {
      "message": {},
      "error_message": "insert or update on table \"rel_user_permission\" violates foreign key constraint \"reluserpermission_permissionfk\"",
      "status": false
    }
  },

]


exports.validationDeletePermissions = [
  {
    label: 'Test: Validate missing params',
    test: {
    },
    response: {
      "message": {},
      "error_message": [
        {
          "msg": "id_permission is a required parameter",
          "param": "id_permission",
          "location": "body"
        },
        {
          "msg": "id_permission must be a number",
          "param": "id_permission",
          "location": "body"
        }
      ],
      "status": false
    }
  },


  {
    label: 'Test: Delete permission successfully',
    test: {
      "id_user_loged": 35,
      "id_user": 38,
      "id_permission": 1
    },
    response: {
      "message": {
        "deleted_id": 1
      },
      "error_message": {},
      "status": true
    }
  },



]