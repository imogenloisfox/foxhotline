//girls
let girls = [];
let girlNum = 50;

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
let bgIndex = 0;

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
   listOfColors = [color('#d4efb0'), color('#f58ed3'), color('#c6f0f5'), color('#f6f6fb'), color('#a6fdb5'), color('#87d4dc'), color('#b201b8'), color('#d4efb0'), color('#fd02a4')];
  

 //girls
 for(let i = 0; i < girlNum; i++){
  girls.push(new movingGirls());
}


  //button
  let a = createA('http://foxhotline.co.uk', 'WEBSITE');
  a.position(width/2, 0, 0);
  
  a.style('color', '#fd02a4');
  a.style('font-family', 'arial');
  a.style('text-align', 'center');
  a.style('width', '100px');
  a.style('height', '20px');
  a.style('border-radius', '50%');
  a.style('background-color', 'white');
  a.style('border', '2px', '#fd02a4');
  a.style('transition', 'background-color', '2s');
  a.style('padding', '10px', '80px');
  
  a.style('hover', 'background-color', '#fd02a4', 'color', '#fd02a4'); 
}

function draw(){
  background(255);
  randomSeed(seed);
  orbitControl(0.2, 0.2, 0.01);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(255, 0,0);
  directionalLight(90,255,180, 0.15, 0.15, 0);
  pointLight(255,103,151, locX, locY, 100);

  flowerBG();
  flowerBG2();
  flowerBG3();
  flowerBG4();
  flowerBG5();
  flowerBG6();
  flowerBG7();
  colorchange();
  
  for(let i = 0; i < girlNum; i++){
    girls[i].move();
    girls[i].display();
  }
}


class movingGirls{
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.zRange = random(height);
    this.z = random(this.zRange);
    this.valx = random(250);
    this.valy = random(250);
    this.valz = random(250);
    this.size = random(0.5, 15);
    this.c = (listOfColors[int(random(0, listOfColors.length))]);
  }
  
  move(){
    //noise is to return a number from 0-1
    this.valx += 0.003;
    this.valy += 0.002;
    this.valz += 0.002;
    
    this.x = noise(this.valx)*width;
    this.y = noise(this.valy)*height;
    this.z = noise(this.valz)*height;
  }
  
  display(){
    push();
    translate(this.x-width/2, this.y-height/2,this.z-this.zRange/2);
    angleRotate += 0.1;
    rotateX(180);
    rotateY(angleRotate);
    //rotateZ(angleRotate);
    fill(this.c);
    stroke(this.c);
    strokeWeight(random(0.5,1.7));
    sphere(this.size/2);
    let box_x = this.size*2+random(5, 10);
    let box_y = (random(1,5));
    let box_z = (random(5,15));
    let petal = (random(2, 8));
    let angle = 360 / petal;
    for(let i =0; i<petal; i++){
      rotate(angle);
      box(box_x, box_y, box_z);
    }
    
    pop();
}
}

function colorchange(){
  if(mouseIsPressed == true){
    let randomValue = listOfColors[Math.floor(Math.random() * listOfColors.length)];
    bgIndex = floor(random(listOfColors.length));
    listOfColors.push(randomValue);
  } 
}

function flowerBG(){
  push();
  translate(800, height*0.01, -200);
  angle1 += 0.2;
  rotateX(165);
  rotateY(angle1*0.8);
  scale(3.4);
  noStroke();
 // stroke(255,103,151);
  specularMaterial(100);
  model(f1);
  pop();
  
}

function flowerBG3(){
  push();
  translate(50, height*0.05, 0);
  angle1 += 0.2;
  rotateX(150);
  rotateY(-angle1*1.3);
  scale(2);
  noStroke();
  //stroke(255,125,214);
  specularMaterial(100);
  model(f1);
  pop();
  
}

function flowerBG2(){
  push();
  translate(-1000, -200, -600);
  angle1 += 0.2;
  rotateX(175);
  rotateY(-angle1);
  scale(3.7);
  noStroke();
  //noFill()
  //stroke(252,195,224);
  //strokeWeight(0.3)
  specularMaterial(100);
  model(f1);
  pop();
  
}

function flowerBG4(){
  push();
  translate(-1000, height*0.01, -1500);
  angle1 += 0.2;
  rotateX(150);
  rotateY(angle1*0.3);
  scale(4.3);
  noStroke();
  //noFill()
  //stroke(252,195,224);
  //strokeWeight(0.3)
  specularMaterial(110);
  model(f1);
  pop();
  
}

function flowerBG5(){
  push();
  translate(1050, -250, -1600);
  angle1 += 0.2;
  rotateX(155);
  rotateY(-angle1*0.3);
  scale(5.2);
  noStroke();
  //noFill()
  //stroke(252,195,224);
  //strokeWeight(0.3)
  specularMaterial(120);
  model(f1);
  pop();
  
}
function flowerBG6(){
  push();
  translate(-600, -400, -1600);
  angle1 += 0.2;
  rotateX(145);
  rotateY(angle1*2);
  scale(3.4);
  noStroke();
  //noFill()
  //stroke(252,195,224);
  //strokeWeight(0.3)
  specularMaterial(120);
  model(f1);
  pop();
  
}

function flowerBG7(){
  push();
  translate(50, -450, -800);
  angle1 += 0.2;
  rotateX(150);
  rotateY(angle1*1.2);
  scale(4.5);
  noStroke();
  //stroke(255,125,214);
  specularMaterial(110);
  model(f1);
  pop();
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}