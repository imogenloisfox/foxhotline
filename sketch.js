//girls
let girls = [];
let girlNum = 30;

//angle
let angle = 0;
let angleRotate = 0;
let angle1 = 0;

//models
let girl;
let flower;

let seed = 100000;

let listOfColors = [];

function preload(){
  girl = loadModel ('girl.obj');
  flower = loadModel ('flower.obj');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent('sketch-container');
 
  angleMode(DEGREES);

  //color
  listOfColors = [color('#FF85F0'), color('#A9FFD2'), color('#FF8A22'), color('#D50000'), color('#14F4FF'), color('#F1FF14'), color('#9589FF'), color('#FF009E'), color('#076610')];
  

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

  ambientLight(240);
  directionalLight(10,10,10, 0.15, 0.15, 0);
  pointLight(255, 255, 255, locX, locY, 100);
  
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
    this.size = random(0.05, 0.5);
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
    translate(this.x - width*0.45, this.y - height*0.27, this.z - this.zRange/2);
    angleRotate += 0.1;
    rotateX(180);
    rotateY(angleRotate);
    //rotateZ(angleRotate);
    noFill();
    stroke(this.c);
    strokeWeight(random(0.05, 0.4));
    scale(this.size);
    model(girl);
    pop();
  }
}



function flowerBG(){
  push();
  translate(350, height*0.3, 0);
  angle1 += 0.2;
  rotateX(160);
  rotateY(angle1);
  scale(0.42);
  noStroke();
  //stroke(0);
  specularMaterial(100);
  model(flower);
  pop();
  
}

function flowerBG2(){
  push();
  translate(-400, height*0.3, -100);
  angle1 += 0.2;
  rotateX(165);
  rotateY(-angle1);
  scale(0.47);
  noStroke();
  //stroke(0);
  specularMaterial(150);
  model(flower);
  pop();
  
}

function flowerBG3(){
  push();
  translate(0, height*0.4, -100);
  angle1 += 0.2;
  rotateX(150);
  rotateY(-angle1);
  scale(0.43);
  noStroke();
  //stroke(0);
  specularMaterial(200);
  model(flower);
  pop();
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}