
import {cube} from './math.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  const cubeValue = cube(5);
  element.innerHTML = ['Hello', 'webpack', cubeValue].join('');
  btn.innerHTML = '别点我';
  element.appendChild(btn);
  return element;
}
document.body.appendChild(component());
