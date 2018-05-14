function Grid() {

    this.gameGrid = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 2, 1, 1, 2, 2, 2, 2],
        [1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
    this.gameGrid.sort(function(a, b) {
        return 0.5 - Math.random()
    });
    this.display = function() {

        for (var row = 0; row < rows; row++) {
            for (var col = 0; col < cols; col++) {
                if (this.gameGrid[row][col] == 1) {
                    fill(91, 172, 204);
                } else if (this.gameGrid[row][col] == 2) {
                    fill(91, 172, 204);
                } else if (this.gameGrid[row][col] == 3) {
                    fill(255, 0, 0);
                } else if (this.gameGrid[row][col] == 4) {
                    fill(128, 128, 128);
                }
                rect(col * squareSize, row * squareSize, squareSize, squareSize);
            }
        }
    };
    this.clicked = function() {
        var col = floor(mouseX / squareSize);
        var row = floor(mouseY / squareSize);
        var accuracy = floor(hitCount / userHits * 100);
        if (this.gameGrid[row][col] == 2) {
            this.gameGrid[row][col] = 3;
            hitCount++;
            userHits++;
        } else if (this.gameGrid[row][col] == 1) {
            this.gameGrid[row][col] = 4;
            userHits++;
        }
        if (hitCount == 12) {
            $("#win").html("All enemy ships have been destroyed. You took " + userHits + " hits to win the game");
            $("#acc").html("You have an accuracy of " + accuracy + "%");
            noLoop();
        }
    }
}

function restartSketch() {
    loop();
    hitCount = 0;
    userHits = 0;
    grid = new Grid();
    grid.gameGrid.sort(function(a, b) {
        return 0.5 - Math.random()
    });
}
