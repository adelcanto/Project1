class Player {
    constructor(ctx, posX, posY, image, keys, gameHeight, gameWidth) {
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.height = 88;
        this.width = 73;

        this.posY0 = this.gameHeight;
        this.image = new Image();
        this.image.src = image;

        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.vx = 9;
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

    jump(posY0){
        if (this.posY < posY0 - this.height) {
            this.posY += this.vy;
            this.vy += this.gravity;
        } else {
            this.vy = 1;
            this.posY = posY0 - this.height;
        }
    }

    move() {
        
        // if (this.posY < posY0 - this.height) {
        //     this.posY += this.vy;
        //     this.vy += this.gravity;
        //     // this.charJumping = true;
        // } else {
        //     this.vy = 1;
        //     this.posY = posY0 - this.height;
        //     // this.charJumping = false;
        // }
       
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
                    // console.log(this.posY0)
                    // console.log("holaaaaaa")
                    if (this.posY === 563-this.height || this.posY === 460-this.height || this.posY === this.gameHeight-this.height) {
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
            }
        });

        document.addEventListener('keyup', (e) => {
            e.preventDefault();
            if (e.keyCode === 37) {
                this.keyState.keyLeft = false;
            }
            if (e.keyCode === 39) {
                this.keyState.keyRight = false;
            }
        });
    }

    animate(framesCounter) {
        if (framesCounter % 8 === 0) {
            this.framesIndex++;
            if (this.framesIndex > 9) this.framesIndex = 0;
        }
    }

}