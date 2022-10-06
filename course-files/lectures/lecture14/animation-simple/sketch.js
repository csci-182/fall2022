let x = 100;
let y = 200;
let width = 50;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    if (x > canvasWidth + width) {
        x = -width;
    }
    x += 1;

    clear();
    noFill();
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}
