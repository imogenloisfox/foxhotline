//girls
let girls = [];
let girlNum = 20;

//angle
let angle = 0;
let angleRotate = 0;
let angle1 = 0;

//models
let girl;
let flower;
let f1;


let seed = 100000;

let listOfColors = [];

function preload(){
  girl = loadModel ('girl.obj');
  flower = loadModel ('flower.obj');
  f1 = loadModel('f1.obj');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent('sketch-container');
 
  angleMode(DEGREES);

  //color
   //colorMode(HSB);
   listOfColors = [color('#b9e898'), color('#fe633c'), color('#c6f0f5'), color('#ff2e4c'), color('#14F4FF'), color('#26a7e1#'), color('#f58ed3'), color('#e9ec02'), color('#f6f6fb')];
  

 //girls
 for(let i = 0; i < girlNum; i++){
  girls.push(new movingGirls());
}
}

function draw(){
  background(255);
  randomSeed(seed);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(255, 0,0);
  directionalLight(90,255,180, 0.15, 0.15, 0);
  pointLight(255,103,151, locX, locY, 100);

  flowerBG();
  flowerBG2();
  flowerBG3();
  
  for(let i = 0; i < girlNum; i++){
    girls[i].move();
    girls[i].display();
  }
}

class movingGirls{
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.zRange = height;
    this.z = random(this.zRange);
    this.valx = random(300);
    this.valy = random(200);
    this.valz = random(100);
    this.size = random(0.01, 0.3);
    this.c = (listOfColors[int(random(0, listOfColors.length))]);
  }
  
  move(){
    //noise is to return a number from 0-1
    this.valx += 0.005;
    this.valy += 0.015;
    this.valz += 0.005;
    
    this.x = noise(this.valx)*width;
    this.y = noise(this.valy)*height;
    this.z = noise(this.valz)*this.zRange;
  }
  
  display(){
    push();
    translate(this.x - width*0.45, this.y - height*0.3, this.z - this.zRange/2);
    angleRotate += 0.1;
    rotateX(180);
    rotateY(angleRotate);
    //rotateZ(angleRotate);
    noFill();
    stroke(0);
    strokeWeight(random(0.03, 0.25));
    scale(this.size);
    model(girl);
    pop();
  }
}



function flowerBG(){
  push();
  translate(350, height*0.15, 0);
  angle1 += 0.2;
  rotateX(160);
  rotateY(angle1);
  scale(1.7);
  noStroke();
  //stroke(0);
  specularMaterial(100);
  model(f1);
  pop();
  
}

function flowerBG2(){
  push();
  translate(-400, height*0.15, -100);
  angle1 += 0.2;
  rotateX(165);
  rotateY(-angle1);
  scale(1.7);
  noStroke();
  //stroke(0);
  specularMaterial(100);
  model(f1);
  pop();
  
}

function flowerBG3(){
  push();
  translate(0, height*0.15, -100);
  angle1 += 0.2;
  rotateX(150);
  rotateY(-angle1);
  scale(2);
  noStroke();
  //stroke(0);
  specularMaterial(100);
  model(f1);
  pop();
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}