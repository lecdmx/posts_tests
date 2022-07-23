const validationBody = [
    {
      label: 'Attribute: Validation: Missing start_date attribute',
      test: {
        "end_date": "2022-07-23",        
      },
      status: false,
      error_message: "start_date is a required parameter"
    }
];

module.exports = validationBody;
