var ball,img_paddle,img_ball,paddle;

 
  
  
function preload() {
  /* preload your images here of the ball and the paddle */
  img_ball = loadImage("ball.png");
 img_paddle = loadImage("paddle.png"); 
   
}


function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
 
  var ball = createSprite(300,200);
  var paddle = createSprite(300,200);
  
  /* assign the images to the sprites */
  ball.addAnimation("ball.png",img_ball);
  paddle.addAnimation("paddle.png",img_paddle);

  
  /* give the ball an initial velocity of 9 in the X direction */
  
  ball.velocityX = 9;
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  
  edges=createEdgesSprite();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
       
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  
  ball.bounceOff(paddle);
  if (ball.bounceOff(paddle)){
    randomVelocity();
     }
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     paddle.y -= 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
  
    paddle.y += 20 ;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
ball.velocityY = randomNumber(1 , 400);
}

