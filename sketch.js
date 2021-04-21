function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-container');
}

function draw(){
  fill(122, 134, 211);
  ellipse(windowWidth/2, windowHeight/2, 100);
}



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}