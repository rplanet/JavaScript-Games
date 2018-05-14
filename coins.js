function Coin(img) {
    this.topBoundary = height * 0.078125;
    this.bottomBoundary = height * 0.8;
    this.x = random(width,width * 1.5);
    this.y = random(this.topBoundary, this.bottomBoundary);
    this.r = 5;
    this.col = color(random(255), random(255), random(255));
    this.img = img;

    this.update = function(wallArray) {
        if (frameCount % 1 === 0) {
            this.x -= 2;
        }
    }

    this.display = function() {
        image(this.img, this.x, this.y, this.r * 2, this.r * 2);
    }
}
