class Platform {
    constructor(ctx, posX, posY, platWidth, platHeight) {
        this.ctx = ctx,
        this.posX = posX,
        this.posY = posY,
        this.platWidth = platWidth,
        this.platHeight = platHeight
    }

    draw() {
        this.ctx.fillRect(this.posX, this.posY, this.platWidth, this.platHeight);
        this.ctx.fillStyle = "green"
    }

}