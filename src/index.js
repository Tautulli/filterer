import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import jQuery from 'jquery';

import Config from './Config';

(($) => {
  $.fn.filterer = function(){
    this.each(function(){
      ReactDOM.render(
        <App config={Config} />,
        this
      );
    });
  }
})(jQuery)






jQuery('#root').filterer();
