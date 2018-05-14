function Wall(w, h, block) {
    // Properties (State)
    this.topBoundary = height * 0.078125;
    this.bottomBoundary = height * 0.8;
    this.x = random(width);
    this.y = random(this.topBoundary, this.bottomBoundary);
    this.w = w;
    this.h = h;
    this.xSpeed = -2;
    this.img = block;


    this.update = function() {
        if (frameCount % 1 === 0) {
            this.x += this.xSpeed;
        }
        if (frameCount % 300 === 0) {
            this.xSpeed -= 1;
        }
        if (this.x < -this.w) {
            this.x = random(2 * width);
            this.y = random(this.topBoundary, this.bottomBoundary);
        }
    }

    // Methods (Behaviour)
    this.display = function() {
        image(block1, this.x, this.y, this.w, this.h)
    };

}
