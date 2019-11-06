class Projectiles {
    constructor(ctx, posX, posY, width, height, floor, enemyDirection) {
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.floor = floor;
        this.enemyDirection = enemyDirection;
        this.vx = 3 * this.enemyDirection;
        this.vy = 3;
    }

    draw() {
        this.ctx.fillRect(this.posX, this.posY, 20, 20);
        this.ctx.fillStyle = "red";
    }

    move() {
        this.posX += this.vx;
    }

}