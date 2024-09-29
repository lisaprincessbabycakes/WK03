let cDiam = 10;
let xOffset = 50;
let xSpacing = 100;
let xPos = 50;
let yPos = 200;

let yOffset = 50;
let ySpacing = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(220, 230, 21);
  fill(0);

  for (let xPos = xOffset; xPos <= width; xPos += xSpacing) {
    for (let yPos = yOffset; yPos <= height - yOffset; yPos += ySpacing) {
      ellipse(xPos, yPos, cDiam);
    }
  }
  // big circles
  for (let xPos = xOffset + 50; xPos <= width; xPos += xSpacing) {
    for (let yPos = yOffset; yPos <= height - yOffset; yPos += ySpacing)
      ellipse(xPos, yPos, cDiam + 15);

    for (let xPos = xOffset+50; xPos <= width; xPos += xSpacing) {
      for (let yPos = yOffset+75; yPos <= height - yOffset; yPos += ySpacing) {
        ellipse(xPos, yPos, cDiam);
        
        for (let xPos = xOffset; xPos <= width; xPos += xSpacing) {
    for (let yPos = yOffset+75; yPos <= height - yOffset; yPos += ySpacing)
      ellipse(xPos, yPos, cDiam + 15);
        }
      }
    }
  }
}

