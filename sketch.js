let boxSize = 300;
let angle = 0;
let balls = [];
let initial_z;
let xRange;
let colors = [];
let ballNum = 30;
let angleRotate = 0;
let heart;
let girl;
let seed = 100000;

function preload(){
  girl = loadModel ('girl.obj');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent('sketch-container');
  colorMode(HSB);
  angleMode(DEGREES);
   //balls
   for(let i = 0; i < ballNum; i++){
    balls.push(new movingBall());
  }
}

function draw(){
  background(360, 0, 100);
  // noFill();
  // //noStroke();
  // stroke(255, 140, 200);
  // angle += 0.1;
  // rotateY(angle);
  // box(boxSize);
  
  randomSeed(seed);
  for(let i = 0; i < ballNum; i++){
    balls[i].move();
    balls[i].display();
  }
  
}

class movingBall{
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.zRange = height;
    this.z = random(this.zRange);
    this.valx = random(300);
    this.valy = random(200);
    this.valz = random(100);
    this.size = random(0.05, 0.5);
   this.c = color(random(360), random(100), random(100));
  }
  
  move(){
    //noise is to return a number from 0-1
    this.valx += 0.005;
    this.valy += 0.010;
    this.valz += 0.005;
    
    this.x = noise(this.valx)*width;
    this.y = noise(this.valy)*height;
    this.z = noise(this.valz)*this.zRange;
  }
  
  display(){
    push();
    translate(this.x - width*0.5, this.y - height*0.27, this.z - this.zRange/2);
    angleRotate += 0.1;
    rotateX(180);
    rotateY(angleRotate);
    //rotateZ(angleRotate);
    noFill();
    stroke(this.c);
    strokeWeight(random(0.05, 0.5));
    scale(this.size);
    model(girl);
    pop();
  }
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}