exports.validationGetPostsByDate = [
  {
    label: 'Validation: Missing start_date attribute',
    test: {
      "end_date": "2022-07-23"
    },
    response: [
      {
        "message": {},
        "error_message": [
          {
            "msg": "start_date is a required parameter",
            "param": "start_date",
            "location": "body"
          },
          {
            "msg": "start_date must be a date (yyyy-mm-dd)",
            "param": "start_date",
            "location": "body"
          }
        ],
        "status": false
      }
    ]
  },
  {
    label: 'Validation: Missing end_date attribute',
    test: {
      "start_date": "2022-07-23"
    },
    response: [
      {
        "message": {},
        "error_message": [
          {
            "msg": "end_date is a required parameter",
            "param": "end_date",
            "location": "body"
          },
          {
            "msg": "end_date must be a date (yyyy-mm-dd)",
            "param": "end_date",
            "location": "body"
          }
        ],
        "status": false
      }
    ]
  },
  {
    label: 'Validation: Invalid end_date attribute',
    test: {
      "start_date": "2022-07-23",
      "end_date": "hola"
    },
    response: [
      {
        "message": {},
        "error_message": [
          {
            "value": "hola",
            "msg": "end_date must be a date (yyyy-mm-dd)",
            "param": "end_date",
            "location": "body"
          }
        ],
        "status": false
      }
    ]
  },
  {
    label: 'Validation: Invalid start_date attribute',
    test: {
      "start_date": "hola",
      "end_date": "2022-07-23"
    },
    response: [
      {
        "message": {},
        "error_message": [
          {
            "value": "hola",
            "msg": "start_date must be a date (yyyy-mm-dd)",
            "param": "start_date",
            "location": "body"
          }
        ],
        "status": false
      }
    ]
  },
  {
    label: 'Validation: Get posts between start_date and end_date successfully',
    test: {
      "start_date": "2022-07-01",
      "end_date": "2022-07-25"
    },
    response: [
      {
        "message": {},
        "results": [
          {
            "id_post": 35,
            "creation_date": "2022-07-14T20:39:55.713Z",
            "creation_date_formated": "14/07/2022",
            "days": 10,
            "alert": "ALERT_MORE_7_DAYS"
          },
          {
            "id_post": 36,
            "creation_date": "2022-07-24T20:40:02.121Z",
            "creation_date_formated": "24/07/2022",
            "days": 0,
            "alert": ""
          },
          {
            "id_post": 37,
            "creation_date": "2022-07-24T20:40:03.325Z",
            "creation_date_formated": "24/07/2022",
            "days": 0,
            "alert": ""
          },
          {
            "id_post": 38,
            "creation_date": "2022-07-24T20:40:04.783Z",
            "creation_date_formated": "24/07/2022",
            "days": 0,
            "alert": ""
          },
          {
            "id_post": 39,
            "creation_date": "2022-07-24T20:40:06.198Z",
            "creation_date_formated": "24/07/2022",
            "days": 0,
            "alert": ""
          }
        ],
        "error_message": {},
        "status": true
      }
    ]
  }
];

exports.validationPosts = [
  {
    label: 'Validation: Get all posts successfully',
    test: {
    },
    response: {
      "message": {},
      "results": [
        {
          "id_post": 39,
          "creation_date": "2022-07-24T20:40:06.198Z",
          "creation_date_formated": "24/07/2022",
          "days": 0,
          "alert": ""
        }
      ],
      "error_message": {},
      "status": true
    }
  }
];

exports.validationGet1Post = [
  {
    label: 'Validation: Get one post successfully',
    test: {
    },
    response: {
      "message": {},
      "results": [
        {
          "id_post": 39,
          "creation_date": "2022-07-24T20:40:06.198Z",
          "creation_date_formated": "24/07/2022",
          "days": 0,
          "alert": ""
        }
      ],
      "error_message": {},
      "status": true
    }
  }
];

exports.validationAddNewPost = [
  {
    label: 'Validation: Missing id_user attribute',
    test: {
      "id_user": "11",
      "post": "post 13..."
    },
    status: false,
    error_message: "start_date is a required parameter"
  },
  {
    label: 'Validation: Missing end_date attribute',
    test: {
      "start_date": "2022-07-23",
    },
    status: false,
    error_message: "end_date is a required parameter"
  }
];

