// import printMe from './output-management/print';

function getName() {
  return import(/* webpackChunkName: "getName" */ 'lodash').then((_)=>{
    let el = document.createElement('div');
    el.innerHTML =  _.join(['hello', 'Amber']);
    return el;
  }).catch(error => 'An error occurred while loading the component');
}

function getNum() {
  return import(/* webpackChunkName: 'getNum' */ "./tree-shaking/math").then((math)=>{
    let el = document.createElement('div');
    el.innerHTML = math.square(2);
    return el;
  })
}

function getOther() {
  return import(/* webpackChunkName: 'getOther' */ "./output-management/print").then((obj)=>{
    obj.default();
  })
}


getName().then((el)=>{
  document.body.appendChild(el);
});
getOther();

getNum().then((el) => {
  document.body.appendChild(el);
})

// printMe();