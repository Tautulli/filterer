# Filterer

This project was created for use in PlexPy, to create a dynamic list of conditions to filter by

built using React, wrapped with jquery... 

## Preview

![Preview](http://i.imgur.com/0AdMapj.jpg)

## Usage

copy `dist/filterer.jquery.js` to your js directory.

`<script src="js/filterer.jquery.js"></script>`

```javascript
config = {
  parameters: [
    {"name": "Title", "type": "string", "value": "title"},
    {"name": "Year", "type": "number", "value": "year"}
  ],
  conditions: [
    {coefficient: "year", operator: "is", value: ""},
    {coefficient: "title", operator: "begins with", value: ""}
  ],
  updateConditions: function(newConditions) {
    // handle new conditions
  }
}

$('element').filterer(config);
```


## Contribute?

Check out the "Create React App" Docs [DEVELOP.md](https://github.com/wcomartin/filterer/blob/master/DEVELOP.md)