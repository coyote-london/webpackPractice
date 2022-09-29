import _ from 'lodash';
import './style.css';
import Mercury from './mercury.jpg';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const img = new Image();
    img.src = Mercury;
    
    element.appendChild(img);

    console.log(Data);
    console.log(Notes);
  
    return element;
  }
  
  document.body.appendChild(component());