

const Config = {
  coefficients: [
    {"name": "Title", "type": "string", "value": "title"},
    {"name": "Year", "type": "number", "value": "year"}
  ],
  conditions: [
    {coefficient: "year", operator: "is", value: ""},
    {coefficient: "title", operator: "begins with", value: ""}
  ]
}


export default Config;
