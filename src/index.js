import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import jQuery from 'jquery';

import Config from './Config';

(($) => {
  $.fn.filterer = function(config){
    this.each(function(){
      ReactDOM.render(
        <App config={config} />,
        this
      );
    });
  }
})(jQuery)






jQuery('#root').filterer(Config);
