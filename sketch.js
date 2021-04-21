let movers = [];
let attractor;

let colors = [];

let seed = 1000;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-container');
  colorMode(HSB);
  
  //color
  for(let i = 0; i < 9; i++) {
    let newColor = color(random(360), random(100), random(100), 0.5);
    colors.push(newColor);
    //frameRate(3);
  }

  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let m = random(50, 150);
    movers[i] = new Mover(x, y, m);
  }
  attractor = new Attractor(width / 2, height / 2, 100);
 
}

function draw(){
  background(0, 0, 100, 0.4);
  
   randomSeed(seed); //MAKES VARIATION STATIC!!!
  
  
  for (let mover of movers) {
    mover.update();
    mover.show();
    attractor.attract(mover);
  }
  if (mouseIsPressed) {
    attractor.pos.x = mouseX;
    attractor.pos.y = mouseY;
  }
  attractor.show();
}


function flower(x,y){
    
    //flower
  //flower petals
  push();
  translate(x,y);
  scale(random(0.1, 0.9));
  ellipse(0, -25, 50);
  ellipse(0, 25, 50);
  ellipse(-25, 0, 50);
  ellipse(25, 0, 50);
  pop();
 //flower middle
  push();
  translate(x,y);
  scale(0.5);
  fill(255);
  ellipse(0,0,20);
  pop();
  }


class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(5);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
  }


  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

  }
  show() {
  stroke(random(colors));
  fill(random(colors));
  strokeWeight(random(20));
    flower(this.pos.x, this.pos.y, this.r * 2);
  }
}


class Attractor {
  
  constructor(x,y,m) {
    this.pos = createVector(x,y);
    this.mass = m;
    this.r = sqrt(this.mass)*2;
  }
  
  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distanceSq = constrain(force.magSq(), 100, 1000);
    let G = 5;
    let strength = G * (this.mass * mover.mass) / distanceSq;
    force.setMag(strength);
    mover.applyForce(force);
  }
  
  
  show() {
  stroke(random(colors));
  fill(random(colors));
  strokeWeight(random(20));
    flower(this.pos.x, this.pos.y, this.r*2);    
    


  
  }
}



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}