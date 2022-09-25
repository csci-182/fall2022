const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
let faceColor;
let earColor;
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background(13, 171, 118);
    faceColor = color(210, 180, 140);
    earColor = color(145, 110, 69);
    noLoop();
    drawGrid();
}

function draw() {
    drawFace(canvasWidth / 2, canvasHeight / 2, 200, faceColor, earColor);
    drawFace(200, 200, 100, faceColor, earColor);
    drawFace(599, 544, 150, faceColor, earColor);
}

function drawFace(x, y, width, bgColor) { 
    // eye variables:
    const leftEyeX = x - width / 6;
    const rightEyeX = x + width / 6;
    const eyeY = y - width / 8;   
    const eyeWidth = width / 6; 
    const eyeHeight = width / 6;

    // ear variables:
    const leftEarX = x - width / 2.5;
    const rightEarX = x + width / 2.5;
    const earY = y - width / 2.5;   
    const earWidth = width / 2;

    // nose variables:
    const noseSize = width / 15;
    const x1 = x - noseSize;
    const x2 = x + noseSize;
    const x3 = x;
    const y1 = y + noseSize;
    const y2 = y1;
    const y3 = y1 + noseSize;

    // mouth variables:
    const cpX1Left = x - width/2.5;
    const cpX1Right = x + width/2.5;
    const cpY1 = y - width;
    const cpX2 = x1;
    const cpY2 = y2;
    const mouthTopX = x3;
    const mouthTopY = y3;
    const mouthBottomLeftX = x3 - width/5;
    const mouthBottomRightX = x3 + width/5;
    const mouthBottomY = y3 + width/6;



    // face circle
    fill(bgColor);
    circle(x, y, width);

    // ears
    fill(earColor);
    circle(leftEarX, earY, earWidth);
    circle(rightEarX, earY, earWidth);

    // eyes
    fill(0);
    ellipse(leftEyeX, eyeY, eyeWidth, eyeHeight);
    ellipse(rightEyeX, eyeY, eyeWidth, eyeHeight);

    // nose
    stroke(0);
    strokeWeight(noseSize* 1.5);
    strokeJoin(ROUND);
    triangle(x1, y1, x2, y2, x3, y3);
    strokeWeight(0);

    // mouth:
    strokeWeight(noseSize / 3);
    noFill();
    stroke(0);

    // left mouth curve
    curve(
        cpX1Left, cpY1, // control point
        mouthTopX, mouthTopY,
        mouthBottomLeftX, mouthBottomY,
        cpX2, cpY2 // control point
    ); 

    // right mouth curve
    curve(
        cpX1Right, cpY1, // control point
        mouthTopX, mouthTopY,
        mouthBottomRightX, mouthBottomY,
        cpX2, cpY2 // control point
    );
    strokeWeight(1);
}

function mousePressed() {
    drawFace(mouseX, mouseY, 150, faceColor, earColor);
}

function drawGrid() {
    for (let x = 0; x < canvasWidth; x += 100) {
		for (let y = 0; y < canvasHeight; y += 100) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
            // textSize(32);
            if (x % 200 == 0 && y % 200 == 0) {
			    strokeWeight(8);
                point(x, y);
                strokeWeight(0);
                text(`(${x}, ${y})`, x + 5, y + 20);
            }
            strokeWeight(1);
		}
	}
}