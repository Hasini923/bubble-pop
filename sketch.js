function setup() {
  createCanvas(800, 800);
  
  //set up ball variables
  ball = [];
  ballVel = [];
  ballSize = 50;
  
  //ball quantity and ball speed
  for (var i = 0; i < 1; i++) {
    ball.push(createVector(random(0, width), random(0, height)));
    ballVel.push(p5.Vector.random2D().mult(random(8)));
  }

}



//show or draw ball
function draw() {
  background(0);
updateBall();

 
}

function mouseClicked(){
    ball.push(createVector( mouseX, mouseY ));
    ballVel.push(p5.Vector.random2D().mult(random(8)));
}