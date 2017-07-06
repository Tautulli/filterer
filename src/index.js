import React from 'react';
import ReactDOM from 'react-dom';
import Filterer from './Filterer';
const $ = window.$;

$.fn.filterer = function(config){

  config.operators = [
    {
      name: "contains",
      types: ["string", "str"]
    },{
      name: "does not contain",
      types: ["string", "str"]
    },
    {
      name: "is",
      types: ["string", "str", 'number', 'int', 'float']
    },
    {
      name: "is not",
      types: ["string", "str", 'number', 'int', 'float']
    },
    {
      name: "begins with",
      types: ["string", "str"]
    },
    {
      name: "ends with",
      types: ["string", "str"]
    },
    {
      name: "is greater than",
      types: ["number", 'int', 'float']
    },
    {
      name: "is less than",
      types: ["number", 'int', 'float']
    },
  ];

  config.classes = {...{
    plusIcon: 'fa fa-plus',
    minusIcon: 'fa fa-minus',
    filterLineRow: 'form-group',
    filterLineParameter: 'col-sm-4',
    filterLineOperator: 'col-sm-3',
    filterLineValue: 'col-sm-5',
    filterLineInput: 'form-control',
    filterLineLabelRow: 'row',
    filterLineLabelCondition: 'col-sm-10',
    filterLineLabelControls: 'col-sm-2 text-right',
  }, ...config.classes};
  
  this.each(function(){
    ReactDOM.render(
      <Filterer id="filterer" config={config} />,
      this
    );
  });
};

if(window.wcomartin_filterer_demo){
  const Config = {
    parameters: [
      {"name": "Title", "type": "string", "value": "title"},
      {"name": "Year", "type": "number", "value": "year"}
    ],
    conditions: [
      {parameter: "year", operator: "is", value: [2017]},
      // {parameter: "title", operator: "begins with", value: ["Westworld"]}
    ]
  };
  Config.updateConditions = function(conditions) {
    console.log(JSON.stringify(conditions));
  };
  $('#root').filterer(Config);
}

