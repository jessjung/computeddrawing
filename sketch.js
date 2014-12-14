var os = [];

function setup() {
// createCanvas(640, 480);
  createCanvas(windowWidth, windowHeight);
  background(0,0,0);
  // smooth();
  for (var i=0; i<80; i++) {
    os.push(new Oscillator());
  }
 
}

function draw() {
  
  for (var i=0; i<os.length; i++) {
    os[i].update(i);
    os[i].display();
  }
}

function Oscillator() {
  this.position = createVector(width/2,height/2);
  this.angle = createVector(0,0);
  this.amplitude = createVector(random(240),random(130)); 
  this.angleVelocity = createVector(0.1,0.2);
  
  this.update = function(index){
   
    this.angle.add(this.angleVelocity);
    this.position = createVector(sin(this.angle.x/index),sin(this.angle.y/index));
    this.position.mult(this.amplitude.x); 
   
  };
  
  this.display = function(){
    
    push();
    translate(width/2, height/2);
    ellipseMode(CENTER);
    fill(255,80);
    noStroke();
    ellipse(this.position.x, this.position.y, 1,1);
    pop();
    
  };
}
