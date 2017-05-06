

const Config = {

  coefficients: [
    {
      "name": "Title",
      "type": "string",
      "value": "{title}"
    },
    {
      "name": "Year",
      "type": "number",
      "value": "{year}"
    }
  ],

  operators: [
    {
      name: "contains",
      types: ["string"]
    },{
      name: "does not contain",
      types: ["string"]
    },
    {
      name: "is",
      types: ["string", 'number']
    },
    {
      name: "is not",
      types: ["string", 'number']
    },
    {
      name: "begins with",
      types: ["string"]
    },
    {
      name: "ends with",
      types: ["string"]
    },
    {
      name: "greater than",
      types: ["number"]
    },
    {
      name: "less than",
      types: ["number"]
    },
  ]

}


export default Config;
