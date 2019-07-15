import _ from 'lodash';
import style from './style.css';
import img from './img/bg.png';

function component() {
    const el = document.createElement('div');
    const myImg = new Image();
    el.innerHTML = _.join(['你好', '小红'], ' ');
    myImg.src = img;
    el.appendChild(myImg);
    return el;
}

document.body.appendChild(component());