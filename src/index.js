import React from 'react';
import ReactDOM from 'react-dom';
import Filterer from './Filterer';
import jQuery from 'jquery';

import Config from './Config';

(($) => {
  $.fn.filterer = function(config){
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
