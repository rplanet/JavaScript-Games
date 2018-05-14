function Grid() {

    this.gameGrid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    this.display = function() {
        for (var row = 0; row < rows; row++) {
            for (var col = 0; col < cols; col++) {
                if (this.gameGrid[row][col] == 0) {
                    fill(51, 204, 255);
                } else if (this.gameGrid[row][col] == 1) {
                    fill(51, 204, 255);
                } else if (this.gameGrid[row][col] == 2) {
                    fill(255, 0, 0);
                } else if (this.gameGrid[row][col] == 3) {
                    fill(128, 128, 128);
                }
                rect(col * squareSize, row * squareSize, squareSize, squareSize);
            }
        }
    };
    this.clicked = function() {
        var col = floor(mouseX / squareSize);
        var row = floor(mouseY / squareSize);
        var accuracy = floor(hitCount/userHits * 100);
        if (this.gameGrid[row][col] == 1) {
            this.gameGrid[row][col] = 2;
            hitCount++;
            userHits++;
        } else if (this.gameGrid[row][col] == 0) {
            this.gameGrid[row][col] = 3;
            userHits++;
        }
        if (hitCount == 12) {
            $("#win").html("All enemy ships have been destroyed. You took " + userHits + " hits to win the game");
            $("#acc").html("You have an accuracy of " + accuracy + "%");
        }
    }
}
