const car1 = {
    x: 100,
    y: 100,
    width: 200,
    speed: 4
};

// const car2 = {
//     x: 500,
//     y: 300,
//     width: 150,
//     speed: -3
// };

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    clear();

    car1.x += car1.speed;
    drawCar(car1.x, car1.y, car1.width, 'hotpink');
    
    // feel free to comment this line out if
    // it's not useful:
    drawGrid(canvasWidth, canvasHeight);
}

function drawCar(x, y, size, fillColor, wheelColor='black') {
    
    // body
    fill(fillColor);
    strokeWeight(0);
    // top: 
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7);
    // bottom:
    rect(x - size/2, y - size/5, size, size/5);

    // Wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
    
    drawGrid(canvasWidth, canvasHeight);
}
