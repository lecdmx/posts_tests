exports.validationBodyPostbyDate = [
  {
    label: 'Attribute: Validation: Missing start_date attribute',
    test: {
      "end_date": "2022-07-23",
    },
    status: false,
    error_message: "start_date is a required parameter"
  },
  {
    label: 'Attribute: Validation: Missing end_date attribute',
    test: {
      "start_date": "2022-07-23",
    },
    status: false,
    error_message: "end_date is a required parameter"
  },
  {
    label: 'Attribute: Validation: Invalid end_date attribute',
    test: {
      "start_date": "2022-07-23",
      "end_date": "hola",
    },
    status: false,
    error_message: "end_date must be a date (yyyy-mm-dd)"
  },
  {
    label: 'Attribute: Validation: Invalid start_date attribute',
    test: {
      "start_date": "hola",
      "end_date": "2022-07-23",
    },
    status: false,
    error_message: "start_date must be a date (yyyy-mm-dd)"
  }
];

exports.validationBodyStorePost = [
  {
    label: 'Attribute: Validation: Missing id_user attribute',
    test: {
      "id_user": "11",
      "post": "post 13..."
    },
    status: false,
    error_message: "start_date is a required parameter"
  },
  {
    label: 'Attribute: Validation: Missing end_date attribute',
    test: {
      "start_date": "2022-07-23",
    },
    status: false,
    error_message: "end_date is a required parameter"
  }
];

