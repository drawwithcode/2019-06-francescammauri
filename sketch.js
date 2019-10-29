var canvas;
var h1;
var x = 400
var y = 300

function setup() {
h1 = createElement('h1',' red');
h1.mouseClicked(changeColor);
}

function draw() {

  h1.position(x,y);
  x = x + random(-50, 50);
}

function changeColor() {
//callback
  h1.style('color:red');

}
