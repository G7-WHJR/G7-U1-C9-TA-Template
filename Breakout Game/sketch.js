var paddle, ball;
var edgeTop, edgeBottom, edgeLeft, edgeRight;

function setup() {
  createCanvas(450, 400);

  //paddle sprite
  paddle = createSprite(200, 380, 100, 5);
  paddle.shapeColor = "black";
  paddle.immovable = true;

  //ball sprite
  ball = createSprite(150, 250, 15, 15);
  ball.shapeColor = "orange";

  //Top edge
  edgeTop = createSprite(225, 0, 450, 5);
  edgeTop.shapeColor = "gray";
  edgeTop.immovable = true;

  //Bottom edge
  edgeBottom = createSprite(225, 400, 450, 5);
  edgeBottom.shapeColor = "gray";
  edgeBottom.immovable = true;

  //Left edge
  edgeLeft = createSprite(0, 200, 5, 400);
  edgeLeft.shapeColor = "gray";
  edgeLeft.immovable = true;

  //Right edge
  edgeRight = createSprite(450, 200, 5, 400);
  edgeRight.shapeColor = "gray";
  edgeRight.immovable = true;

  //draw bricks
}

function draw() {
  background("honeydew");

  if (mouseIsPressed) {
    ball.velocity.x = 1; // Left or Right
    ball.velocity.y = 1; // Top to Bottom
    ball.setSpeed(4);
  }

  ball.bounce(edgeLeft);
  ball.bounce(edgeRight);
  ball.bounce(edgeBottom);
  ball.bounce(edgeTop);
  ball.bounce(paddle);

  drawSprites();
}
