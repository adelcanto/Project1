class ScoreBoard {

    constructor(ctx, image, posX, posY) {
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.image = new Image();
        this.image.src = image;
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, 60, 60)
    }
}