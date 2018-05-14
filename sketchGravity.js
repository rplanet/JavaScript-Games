var player1, background1, char1, block1, coin1;
var button, button1, button2;
var walls = [];
var coins = [];
var topScore = [];
var score = 0;
var level = 1;

function preload() {
    background1 = loadImage('Gravity Guy/images/background.jpg');
    char1 = loadImage("Gravity Guy/images/character.png");
    block1 = loadImage("Gravity Guy/images/wall.png");
    coin1 = loadImage("Gravity Guy/images/coin.png");
}

function setup() {
    createCanvas(600, 400);
    restartSketch();
    pauseSketch();
    playSketch();
    endSketch();
    button = createButton("Restart");
    button1 = createButton("Pause");
    button2 = createButton("Play");
    button.id("Restart");
    player1 = new Player(32);
    for (var i = 0; i < 2; i++) {
        walls.push(new Wall(random(10, 30), random(50, 150), block1));
        walls.push(new Wall(random(50, 150), random(10, 30), block1));
    }
    for (var i = 0; i < 10; i++) {
        coins.push(new Coin(coin1));
    }
}

function draw() {
    // Draw function runs repeatedly after the setup function.
    background(background1);
    newObjects();
    displayScore();
    player1.update(walls, coins);
    player1.display();

    for (var i = 0; i < walls.length; i++) {
        walls[i].update();
        walls[i].display();
    }

    for (var i = 0; i < coins.length; i++) {
        coins[i].update(walls);
        coins[i].display();
    }
}
