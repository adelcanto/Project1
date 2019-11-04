class Player {
    constructor(ctx, posX, posY, image, keys, gameHeight, gameWidth, posY0) {
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.height = 88;
        this.width = 73;

        this.posY0 = posY0;
        this.image = new Image();
        this.image.src = image;

        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.vx = 5;
        this.vy = 0.4;
        this.gravity = 0.3;
        this.setListeners();
        this.keys = keys;
        this.keyState = {
            keyLeft: false,
            keyRight: false
        };

        this.frames = 10;
        this.framesIndex = 0;
    }

    draw(framesCounter) {
        // this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
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

    move(posY0) {
        if (this.posY < posY0 - 88) {
            this.posY += this.vy;
            this.vy += this.gravity;
        } else {
            this.vy = 1;
            this.posY = posY0 - 88;
        }
        if (this.keyState.keyLeft) {
            this.posX -= this.vx;
        }
        if (this.keyState.keyRight) {
            this.posX += this.vx;
        }
    }

    setListeners() {
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case this.keys.UP_ARROW:
                    if (this.posY >= this.posY0) {
                        this.posY -= this.vy;
                        this.vy -= 12;
                    }
                    break;
            }
        });

        document.addEventListener('keydown', (e) => {
            e.preventDefault();
            if (e.keyCode === 37) {
                this.keyState.keyLeft = true;
            }
            if (e.keyCode === 39) {
                this.keyState.keyRight = true;
                console.log(this.keyState.keyRight);
            }
        });

        document.addEventListener('keyup', (e) => {
            e.preventDefault();
            if (e.keyCode === 37) {
                this.keyState.keyLeft = false;
            }
            if (e.keyCode === 39) {
                this.keyState.keyRight = false;
                console.log(this.keyState.keyRight);
            }
        });
    }

    animate(framesCounter) {
        if (framesCounter%8 === 0) {
            this.framesIndex++;
            if (this.framesIndex > 9) this.framesIndex = 0;
        }
    }

}