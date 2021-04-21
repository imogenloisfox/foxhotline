function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-container');
}

function draw(){
  fill(0);
  ellipse(windowWidth/2, windowHeight/2, 100);
}



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}