
exports.validationGetAllComments = [
  {
    label: 'Validation: Get all comments successfully',
    test: {
    },
    response: {
      "message": {},
      "results": [
        {
          "id_comment": 23,
          "comment": "Comentario 2 en post 1",
          "id_comment_parent": null,
          "id_post": 35,
          "creation_date": "2022-07-24T20:51:18.786Z",
          "creation_date_formated": "24/07/2022"
        },
        {
          "id_comment": 24,
          "comment": "Comentario 3 en post 1",
          "id_comment_parent": null,
          "id_post": 35,
          "creation_date": "2022-07-24T20:51:20.515Z",
          "creation_date_formated": "24/07/2022"
        },
        {
          "id_comment": 25,
          "comment": "Comentario 3 en post 1",
          "id_comment_parent": 23,
          "id_post": 35,
          "creation_date": "2022-07-24T20:51:51.798Z",
          "creation_date_formated": "24/07/2022"
        }
      ],
      "error_message": {},
      "status": true
    }
  }
]

exports.validationGetAllCommentsTokenInvalid = [
  {
    label: 'Validation: Get all comments token invalid',
    test: {
    },
    response: {
      "message": {},
      "results": {
        "message": {},
        "error_message": "Token missing or invalid",
        "status": false
      }
    }
  }
];


exports.validationGetCommentsByPost = [
  {
    label: 'Validation: Get comments by post successfully',
    test: {
      "id_post": 35
    },
    response: {
      "message": {},
      "results": [
        {
          "id_comment": 23,
          "comment": "Comentario 2 en post 1",
          "id_comment_parent": null,
          "id_post": 35,
          "creation_date": "2022-07-24T20:51:18.786Z",
          "creation_date_formated": "24/07/2022"
        },
        {
          "id_comment": 24,
          "comment": "Comentario 3 en post 1",
          "id_comment_parent": null,
          "id_post": 35,
          "creation_date": "2022-07-24T20:51:20.515Z",
          "creation_date_formated": "24/07/2022"
        },
        {
          "id_comment": 25,
          "comment": "Comentario 3 en post 1",
          "id_comment_parent": 23,
          "id_post": 35,
          "creation_date": "2022-07-24T20:51:51.798Z",
          "creation_date_formated": "24/07/2022"
        }
      ],
      "error_message": {},
      "status": true
    }
  },
  {
    label: 'Validation: Get comments by post missings id_post parameter',
    test: {
    },
    response: {
      "message": {},
      "results": [],
      "error_message": {
        "message": {},
        "error_message": [
          {
            "msg": "id_post is a required parameter",
            "param": "id_post",
            "location": "body"
          },
          {
            "msg": "id_post must be a number",
            "param": "id_post",
            "location": "body"
          }
        ],
        "status": false
      },
      "status": false
    }
  }
]


exports.validationAddNewComment = [
  {
    label: 'Validation: Add new comment successfully',
    test: {
      "id_post": "35",
      "comment": "Comentario 3 en post 1"
    },
    response: {
      "message": {
        "generated_id": 27
      },
      "error_message": {},
      "status": true
    }
  },
  {
    label: 'Validation: Add new comment missings params',
    test: {
    },
    response: {
      "message": {},
      "error_message": {
        "message": {},
        "error_message": [
          {
            "msg": "comment is a required parameter",
            "param": "comment",
            "location": "body"
          }
        ],
        "status": false
      },
      "status": false
    }
  }
]


exports.validationGet1Comment = [
  {
    label: 'Validation: Get one comment successfully',
    test: {
    },
    response: {
      "message": {},
      "results": [
        {
          "id_comment": 24,
          "comment": "Comentario 3 en post 1",
          "id_comment_parent": null,
          "id_post": 35,
          "creation_date": "2022-07-24T20:51:20.515Z",
          "creation_date_formated": "24/07/2022"
        }
      ],
      "error_message": {},
      "status": true
    }
  }
];



exports.validationDeleteCommentMissingsParams = [
  {
    label: 'Validation: Missing param',
    test: {
      "id_user_loged": 35
    },
    response: {
      "message": {},
      "error_message": {
        "message": {},
        "error_message": [
          {
            "msg": "id_comment is a required parameter",
            "param": "id_comment",
            "location": "body"
          },
          {
            "msg": "id_comment must be a number",
            "param": "id_comment",
            "location": "body"
          }
        ],
        "status": false
      },
      "status": false
    }
  }
];

exports.validationDeleteCommentOk = [
  {
    label: 'Validation: Comment removed successfully',
    test: {
      "id_comment": 32,
      "id_user_loged": 35
    },
    response:
    {
      "message": {
        "deleted_id": 32
      },
      "error_message": {},
      "status": true
    }
  }
];



exports.validationDeleteCommentPermissionsError = [
  {
    label: 'Validation: Invalid permissions to remove a comment',
    test: {
      "id_comment": 32,
      "id_user_loged": 38
    },
    response:
    {
      "message": {},
      "error_message": "Invalid permissions",
      "status": false
    }
  }
];



exports.validationUpdateCommentMissingsParams = [
  {
    label: 'Validation: Missing param',
    test: {
      "id_user_loged": 31
    },
    response: {
      "message": {},
      "error_message": {
        "message": {},
        "error_message": [
          {
            "msg": "comment is a required parameter",
            "param": "comment",
            "location": "body"
          }
        ],
        "status": false
      },
      "status": false
    }
  }
];

exports.validationUpdateCommentOk = [
  {
    label: 'Validation: Comment updated successfully',
    test: {
      "id_comment": 32,
      "comment": "Nuevo comentario",
    },
    response:
    {
      "message": {
        "updated_id": 31
      },
      "error_message": {},
      "status": true
    }
  }
];

