var tx,ty,start;
var center, position, velocity; 

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background(255,255,255);
  tx = 0;
  ty = 10000;
  start = millis();
}

function draw() {
  
  var currentT = (millis() - start)/1000; 
  
  center = createVector(width/2,height/2);
  position = createVector(width/2,height/2);
  velocity = createVector(10,10);
  
  velocity.x = map(noise(tx),0,1,-500,500);
  velocity.y = map(noise(ty),0,1,-300,300);
  
  tx += 0.01;
  ty += 0.01;
  
  position.add(velocity);
  push();
  translate(width/2,height/2);
  
  position.sub(center);
  
  if(currentT <30){
   stroke(255,20,20,30);
  }else if(currentT <60){
   position.setMag(100);
   stroke(0,20);
  //}else if(currentT <60){
   //location.mult(0.5);
   //stroke(255,20,20,30); 
  }else {
   position.setMag(50);
   stroke(255,20,20,30);
  }
  
  //stroke(0,40);
  line(0,0,position.x, position.y);
  
  pop();
  
}
