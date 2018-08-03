import Rx from 'rxjs/Rx'

const canvas = document.getElementsByTagName('canvas')[0];

if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}

console.log('start learning!');