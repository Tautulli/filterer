import React from 'react';
import ReactDOM from 'react-dom';
import Filterer from './Filterer';
import jQuery from 'jquery';

import Config from './Config';

(($) => {
  $.fn.filterer = function(config){

    config.operators = [
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
    ];

    this.each(function(){
      ReactDOM.render(
        <Filterer config={config} />,
        this
      );
    });
  }
})(jQuery);


Config.updateConditions = function(conditions) {
  console.log(conditions);
};




jQuery('#root').filterer(Config);
