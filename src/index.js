import _ from 'lodash';
import printMe from './print.js';


function component() {
    const element = document.createElement('div');
    const buttonElement = document.createElement('button')
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    buttonElement.innerHTML = 'Click me and check the console';    
    buttonElement.onclick = printMe;
    
    element.appendChild(buttonElement);
;
  
    return element;
  }
  
  document.body.appendChild(component());