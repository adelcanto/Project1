class Fireballs {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.vx = 6;
        this.vy = 6;
        this.image = new Image();
        this.image.src = "img/fireballs/fireballLeft.png";
        this.frames = 4;
        this.framesIndex = 0;
    }

    draw(framesCounter) {
        // this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
        // this.ctx.fillStyle = "red";

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
    }

    animate(framesCounter) {
        if (framesCounter % 2 === 0) {
            this.framesIndex++;
            if (this.framesIndex > 2) this.framesIndex = 0;
        }
    }
}