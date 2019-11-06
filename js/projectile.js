class Projectiles {
    constructor(ctx, enemyX, enemyY, enemyWidth, enemyHeight, floor, enemyDirection) {
        this.ctx = ctx;
        this.enemyX = enemyX;
        this.enemyY = enemyY;
        this.enemyWidth = enemyWidth;
        this.enemyHeight = enemyHeight;
        this.floor = floor;
        this.enemyDirection = enemyDirection;
        this.vx = 3 * this.enemyDirection;
        this.vy = 3;
    }

    draw() {
        this.ctx.fillRect(this.enemyX, this.enemyY, 20, 20);
        this.ctx.fillStyle = "red";
    }

    move() {
        this.enemyX += this.vx;
    }

}