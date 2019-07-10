import _ from 'lodash';
import style from './style.css';
import img from './img/test.png';

function component() {
    const el = document.createElement('div');
    const myImg = new Image();
    el.innerHTML = _.join(['hello', 'webpack'], ' ');
    myImg.src = img;
    el.appendChild = myImg;
    return el;
}

document.body.appendChild(component());