import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application.jsx';

var width = window.screen.availWidth;
var height = window.screen.availHeight;
var root = document.getElementById('root');
root.setAttribute('class','root-content');
root.setAttribute('height',height); 
root.setAttribute('min-width:', width); 


ReactDOM.render(<Application/>,root );
 

