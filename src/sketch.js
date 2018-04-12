var numSegments = 10;
var direction = 'right';

var xStart = 0; //starting x coordinate for snake
var yStart = 250; //starting y coordinate for snake
var diff = 10;

var xCor = [];
var yCor = [];

var xFruit = 0;
var yFruit = 0;
export let score = 0;

let button = document.getElementById('reset');
export default function sketch (p) {
  p.setup = () => {
    p.createCanvas(600, 600);
    p.frameRate(15);
    p.stroke(146, 266, 100);
    p.strokeWeight(10);
    updateFruitCoordinates();

    for (var i = 0; i < numSegments; i++) {
        xCor.push(xStart + (i * diff));
        yCor.push(yStart);
    }
    button.addEventListener('click', resetSketch);
  }
  p.draw = () => {
    p.background(51);
    for (var i = 0; i < numSegments - 1; i++) {
      p.line(xCor[i], yCor[i], xCor[i + 1], yCor[i + 1])
    }
    updateSnakeCoordinates();
    checkGameStatus();
    checkForFruit();
  }

  const resetSketch = () => {
    numSegments = 10;
    direction = 'right';
    xStart = 0;
    yStart = 250;
    xCor = [];
    yCor = [];
    score = 0;
    for (var i = 0; i < numSegments; i++) {
      xCor.push(xStart + (i * diff));
      yCor.push(yStart);
    }
    p.loop();
  }

  const updateSnakeCoordinates = () => {
    for (var i = 0; i < numSegments - 1; i++) {
      xCor[i] = xCor[i + 1];
      yCor[i] = yCor[i + 1];
    }
    switch (direction) {
      case 'right':
        xCor[numSegments - 1] = xCor[numSegments - 2] + diff;
        yCor[numSegments - 1] = yCor[numSegments - 2];
        break;
      case 'up':
        xCor[numSegments - 1] = xCor[numSegments - 2];
        yCor[numSegments - 1] = yCor[numSegments - 2] - diff;
        break;
      case 'left':
        xCor[numSegments - 1] = xCor[numSegments - 2] - diff;
        yCor[numSegments - 1] = yCor[numSegments - 2];
        break;
      case 'down':
        xCor[numSegments - 1] = xCor[numSegments - 2];
        yCor[numSegments - 1] = yCor[numSegments - 2] + diff;
        break;
    }
  }

  const checkGameStatus = () => {
    if (xCor[xCor.length - 1] > p.width ||
        xCor[xCor.length - 1] < 0 ||
        yCor[yCor.length - 1] > p.height ||
        yCor[yCor.length - 1] < 0 ||
        checkSnakeCollision()) {
      p.noLoop();
    }
  }

  const checkSnakeCollision = () => {
    var snakeHeadX = xCor[xCor.length - 1];
    var snakeHeadY = yCor[yCor.length - 1];
    for (var i = 0; i < xCor.length - 1; i++) {
      if (xCor[i] === snakeHeadX && yCor[i] === snakeHeadY) {
        return true;
      }
    }
  }

  const checkForFruit = () => {
    p.point(xFruit, yFruit);
    if (xCor[xCor.length - 1] === xFruit && yCor[yCor.length - 1] === yFruit) {
      score++;
      console.log("score: ", score)
      xCor.unshift(xCor[0]);
      yCor.unshift(yCor[0]);
      numSegments++;
      updateFruitCoordinates();
    }
  }

  const updateFruitCoordinates = () => {
    xFruit = p.floor(p.random(10, (p.width - 100) / 10)) * 10;
    yFruit = p.floor(p.random(10, (p.height - 100) / 10)) * 10;
  }

  p.keyPressed = (event) => {
    event.preventDefault();
    switch (p.keyCode) {
      case 37:
        if (direction !== 'right'){
          direction = 'left';
        }
        break;
      case 39:
        if (direction !== 'left'){
          direction = 'right';
        }
        break;
      case 38:
        if (direction !== 'down'){
          direction = 'up';
        }
        break;
      case 40:
        if (direction !== 'up'){
          direction = 'down';
        }
        break;
    }
  }
}
