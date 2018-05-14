function restartSketch() {
    walls = [];
    coins = [];
    score = 0;
    level = 1;
    player1 = new Player(32);
    for (var i = 0; i < 2; i++) {
        walls.push(new Wall(random(10, 30), random(50, 150), block1));
        walls.push(new Wall(random(50, 150), random(10, 30), block1));
    }
    for (var i = 0; i < 10; i++) {
        coins.push(new Coin(coin1));
    }
}

function endSketch() {
    background(0);
    walls = [];
    coins = [];
    textSize(40);
    text("Game Over", width / 3, height / 2);
    textSize(20);
    text("Click to Restart. Then Click Play to play again.", width / 5, height * 0.75);
    displayScore();
    topScores();
    loadTop();
    noLoop();
}

function pauseSketch() {
    noLoop();
}

function playSketch() {
    loop();
}

function displayScore() {
    textSize(20);
    fill(255, 215, 0);
    text("Your Score: " + score, 50, 20);
    text("Level:" + level, 450, 20);
}

function newObjects() {
    if (frameCount % 30 === 0) {
        coins.push(new Coin(coin1));
    }
    if (frameCount % 600 === 0) {
        level += 1;
        for (var i = 0; i < walls.length; i++) {
            walls[i].xSpeed -= 1;
            walls[i].x += walls[i].xSpeed;
        }
        walls.push(new Wall(random(10, 30), random(50, 150), block1));

    }
}

function keyPressed() {
    player1.keyEvent();
}

function mousePressed() {
    button.mousePressed(restartSketch);
    button1.mousePressed(pauseSketch);
    button2.mousePressed(playSketch);

}
function loadTop() {
    var highscore = localStorage.getItem("highscore");
  if (localStorage.highscore !== undefined) {
    var newHolder = localStorage.getItem("newHolder");
    $("#playerScore").html("Current highScore: " + highscore + " <br> Set by: " + newHolder);
  }
}
function topScores() {
  var highscore = localStorage.getItem("highscore");
  var highscorU = localStorage.getItem("currentUser");
  if(highscore !== null){
      if (score > highscore) {
          localStorage.setItem("highscore", score);
          localStorage.setItem("newHolder", highscorU);
      }
  }
  else{
      localStorage.setItem("highscore", score);
  }
}
