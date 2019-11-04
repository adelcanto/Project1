class Tiles {
    constructor(ctx, posX, posY, tilesLength, img) {
        this.ctx = ctx,
        this.posX = posX,
        this.posY = posY,
        this.image = new Image();
        this.image.src = img;
        this.width = tilesLength;
        this.height = tilesLength;
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
}