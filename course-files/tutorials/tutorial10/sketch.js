const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const heart = [
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
];

    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawGrid(canvasWidth, canvasHeight);
}

function drawCreature(topX, topY, width, palette=['transparent', 'hotpink', 'black', 'white'], outlineColor='#999') {
    const x = topX - width / 2;
    let y = topY - width / 3
    const grid = heart;
    const pixelWidth = width / grid[0].length;
    for (let i = 0; i < grid.length; i++) {
        // draw each row at the specified (x, y) position:
        drawRow(grid[i], x, y, pixelWidth, palette, outlineColor);
        y += pixelWidth;
    }
}

function drawRow (row, topX, topY, pixelWidth, palette=['transparent', 'hotpink', 'black', 'white'], outlineColor='#999') {
    for (let i = 0; i < row.length; i++) {
        const color = palette[row[i]];
        noStroke();
        strokeWeight(0);
        // stroke(outlineColor);
        if (color === 'transparent') {
            noFill();
        } else {
            fill(color);
        }
        square(topX, topY, pixelWidth);
        topX += pixelWidth;
    }
}

function mousePressed() {
    drawCreature(mouseX, mouseY, 200);
}
