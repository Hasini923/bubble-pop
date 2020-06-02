var ball;
var ballVel;
var ballSize;
var ballXLocation = 400;
var ballYLocation = 400;
var ballXDir = 4;
var ballYDir = 3;




function updateBall() {

  for (var i = 0; i < ball.length; i++) {
    push();


    

    ball[i].add(ballVel[i]);



    if (ball[i].x > 800) {
      ball[i].x = 0
    }
    if (ball[i].x < 0) {
      ball[i].x = 800
    }
    if (ball[i].y > 800) {
      ball[i].y = 0
    }
    if (ball[i].y < 0) {
      ball[i].y = 800
    }

   fill(1, 111, 255)
   ellipse(ball[i].x, ball[i].y, ballSize)
   pop();
   
  }


}