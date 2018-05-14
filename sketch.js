// Grid Trying??

// DECLARE GLOBAL VARIABLES
var grid;
var rows = 10;
var cols = 10;
var squareSize = 60;
var hitCount = 0;
var userHits = 0;


// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(600, 600);

    grid = new Grid();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(255);

    grid.display();

}

// EVENT FUNCTION
function mousePressed() {
    grid.clicked();
}
