class Fireballs {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.vx = 6;
        this.vy = 6
    }

    draw() {
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
        this.ctx.fillStyle = "red";
    }

    move() {
        this.posX -= this.vx;
    }
}