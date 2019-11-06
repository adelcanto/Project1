class Objects {
    constructor(ctx, posX, posY, img, scaleX, scaleY) {
        this.ctx = ctx,
        this.posX = posX,
        this.posY = posY,
        this.image = new Image();
        this.image.src = img;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        
    }

    draw() {
        // this.ctx.scale(this.scaleX, this.scaleY);
        this.ctx.drawImage(this.image, this.posX, this.posY);
        
    }
}