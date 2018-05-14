function Player(sc) {
    // Properties (State)
    this.x = 400;
    this.w = 63;
    this.y = height - this.w;
    this.h = 70;
    this.dx = 4;
    this.dy = 0;
    this.gx = -5;
    this.gy = 4;
    this.flipSpeed = -15;
    this.g = -2;
    this.rc = 39;
    this.space = sc;
    // Methods (Behaviour)
    this.display = function() {
        image(char1, player1.x, player1.y, player1.w, player1.h);
    };

    this.update = function(wallArray, coinArray) {
        this.endGame();
        this.moveHz();
        this.moveVt(wallArray, coinArray);
    };
    this.endGame = function() {
        if (this.x < 0 - this.w) {
            endSketch();
        }
    }
    this.moveHz = function() {
        if (keyIsDown(this.rc)) {
            this.x += this.dx;
        }
        if (frameCount % 1 === 0) {
            this.x += this.g;
        }
        if (this.x + this.w > width) { // Stop at right edge
            this.x = width - this.w;
        }
    }
    this.moveVt = function(wallArray, coinArray) {
        // Move Vertically
        this.y += this.dy;

        // land on ceiling
        if (this.y < (height * 0.078125)) {
            this.dy = 0;
            this.y = height * 0.078125;
            this.y -= this.dy;
        }
        // Land on Ground
        if (this.y > (height * 0.75)) {
            this.dy = 0;
            this.y = height * 0.75;
            this.y -= this.dy;
        }
        // Land on any walls
        for (var i = 0; i < wallArray.length; i++) {
            if (this.intersects(wallArray[i])) {
                this.x += this.gx;
                this.gy = this.gy * -1;
                break;
            }
        }
        for (var i = 0; i < coinArray.length; i++) {
            if (this.coinCollector(coinArray[i])) {
                coins.splice(i, 1);
                score += 25;
                break;
            }
        }

    };

    this.intersects = function(aWall) {
        var le1 = this.x;
        var re1 = this.x + this.w;
        var te1 = this.y;
        var be1 = this.y + this.w;
        var le2 = aWall.x || aCoin.x;
        var re2 = aWall.x + aWall.w;
        var te2 = aWall.y;
        var be2 = aWall.y + aWall.h;
        if (le1 < re2 && re1 > le2 && be1 > te2 && te1 < be2) {
            return true;
        } else {
            return false;
        }
    };
    this.coinCollector = function(aCoin) {
        var le1 = this.x;
        var re1 = this.x + this.w;
        var te1 = this.y;
        var be1 = this.y + this.w;
        var le2 = aCoin.x;
        var re2 = aCoin.x + aCoin.r;
        var te2 = aCoin.y;
        var be2 = aCoin.y + aCoin.r;
        if (le1 < re2 && re1 > le2 && be1 > te2 && te1 < be2) {
            return true;
        } else {
            return false;
        }
    };
    this.jump = function() {
        this.flipSpeed = this.flipSpeed * -1;
        this.dy = this.flipSpeed;
    };

    this.keyEvent = function() {
        if (keyCode == this.space) { // Jump on up code
            this.jump();
        }
    };

}
