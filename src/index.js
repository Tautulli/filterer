import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import jQuery from 'jquery';

(($) => {
  $.fn.filterer = function(){
    this.each(function(){
      ReactDOM.render(
        <App />,
        this
      );
    });
  }
})(jQuery)






jQuery('#root').filterer();
