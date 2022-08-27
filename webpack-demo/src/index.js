import _ from 'lodash';
import './style.css';
// import myName from './myName';

function component() {
    const element = document.createElement('div');
  
    // Lodash now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
  
    // element.textContent = myName("Ye Man Oo");
    // return element;
  
    return element;
  }
  
  document.body.appendChild(component());