// Grid Trying??

// DECLARE GLOBAL VARIABLES
var grid;
var rows = 10;
var cols = 10;
var squareSize = 60;
var hitCount = 0;
var userHits = 0;
var backgroundS;

function preload() {
    backgroundS = loadImage("https://st.depositphotos.com/1000998/2754/v/450/depositphotos_27548771-stock-video-water-with-foam-of-sea.jpg")
}
// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(600, 600);
    grid = new Grid();
    restartSketch();
    button = createButton("Restart");
    button.id("Restart");

}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(backgroundS);

    grid.display();

}

// EVENT FUNCTION
function mousePressed() {
    button.mousePressed(restartSketch)
    grid.clicked();
}
