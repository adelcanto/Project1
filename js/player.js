class Player {
    constructor(ctx, posX, posY, image, keys, gameHeight, gameWidth) {
        this.ctx = ctx,
            this.posX = posX,
            this.posY = 570,
            this.height = 707 * 1 / 8,
            this.width = 587 * 1 / 8,

            this.posY0 = 570,
            this.image = new Image(),
            this.image.src = image,

            this.gameHeight = gameHeight,
            this.gameWidth = gameWidth,
            this.vx = 5,
            this.vy = 1,
            this.gravity = 0.2,
            this.setListeners(),
            this.keys = keys,
            this.keyState = {
                keyLeft: false,
                keyRight: false
            },
            this.friction = 0.98
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    move() {
        if (this.posY <= this.posY0) {
            this.posY += this.vy;
            this.vy += this.gravity;
        } else {
            this.vy = 1;
            this.posY = this.posY0;
        }

    }

    setListeners() {
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case this.keys.UP_ARROW:
                    if (this.posY >= this.posY0) {
                        this.posY -= this.vy;
                        this.vy -= 10;
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

        console.log(this.keyState.keyRight);

        // document.addEventListener('keydown', (e => {
        //     switch (e.keyCode) {
        //         case this.keys.RIGHT_ARROW:
        //             this.posX += this.vx;
        //             // this.vx += 10;
        //             break;
        //         case this.keys.LEFT_ARROW:
        //             this.posX -= this.vx;
        //             break;

        //     }
        // }));

    }

}