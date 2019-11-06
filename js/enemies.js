class Enemies {
    constructor(ctx, posX, posY, width, height, gameWidth) {
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.gameWidth = gameWidth;
        this.enemyDirection = 1;
        this.vx = 1.5;
        this.vy = 6
    }

    draw() {
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
        this.ctx.fillStyle = "green";
    }

    move() {
        
        this.posX -= this.vx;

        if (this.posX > this.gameWidth - this.width) {
            this.vx *= -1;
            this.enemyDirection = -1; 
        } 

        if (this.posX < 980){
            this.vx *= -1;
            this.enemyDirection = +1;
        }


        return this.vx
    }
}