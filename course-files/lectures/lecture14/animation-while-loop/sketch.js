let x = 100;
let y = 200;
let width = 50;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);

    
    while(true) {
        if (x > canvasWidth + width) {
            x = -width;
        }

        x += 1;

        clear();
        noFill();
        circle(x, y, width);
        drawGrid(canvasWidth, canvasHeight);
        
        await sleep(20);
    }
    // animate(10);
}

function sleep(ms=100) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// function moveCircle() {
//     x += 1;
//     drawScene();
// }

// function drawScene() {
//     clear();
//     noFill();
//     circle(x, y, width);
//     drawGrid(canvasWidth, canvasHeight);
// }

