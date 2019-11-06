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
        this.vy = 6;
        this.image = new Image();
        this.framesIndex = 0;
        this.frames = 10;
        this.movement = 'facing-left';
    }

    draw(framesCounter) {
        // this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
        // this.ctx.fillStyle = "green";

        switch (this.movement) {
            case 'facing-left':
                this.image.src = "img/Zombie/walkingLeftZombie.png";
                break;
            case 'facing-right':
                this.image.src = "img/Zombie/walkingRightZombie.png";
                break;
        }

        this.ctx.drawImage(
            this.image,
            this.framesIndex * (this.image.width / this.frames),
            0,
            (this.image.width / this.frames),
            this.image.height,
            this.posX,
            this.posY,
            this.width,
            this.height
        );
        this.animate(framesCounter)

    }

    move() {

        this.posX -= this.vx;

        if (this.posX > this.gameWidth - this.width) {
            this.vx *= -1;
            this.enemyDirection = -1;
            this.movement = 'facing-left';
        }

        if (this.posX < 980) {
            this.vx *= -1;
            this.enemyDirection = +1;
            this.movement = 'facing-right';
        }


        return this.vx
    }


    animate(framesCounter) {
        if (framesCounter % 3 === 0) {
            this.framesIndex++;
            if (this.framesIndex > 9) this.framesIndex = 0;
        }
    }
}