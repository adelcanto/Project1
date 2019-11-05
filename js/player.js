class Player {
    constructor(ctx, posX, posY, keys, gameHeight, gameWidth) {
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.height = 88;
        this.width = 73;

        this.posY0 = this.gameHeight;

        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.vx = 8;
        this.vy = 0.5;
        this.gravity = 0.3;
        this.setListeners();
        this.keys = keys;
        this.keyState = {
            keyLeft: false,
            keyRight: false
        };
        this.frames = 10;
        this.framesIndex = 0;
        this.jumping;
        this.movement = 'facing-right';
        this.image = new Image();
    }

    draw(framesCounter) {
        console.log("drawing", this.movement)
        switch (this.movement) {
            case 'moving-right':
                this.image.src = "img/character/walkingKnight.png";
                break;
            case 'facing-right':
                this.image.src = "img/character/idelingKnight.png";
                break;
            case 'moving-left':
                this.image.src = "img/character/walkingLeftKnight.png";
                break;
            case 'facing-left':
                this.image.src = "img/character/idelingLeftKnight.png";
                break;

        }

        // if (this.movement) {
        //     this.image.src = "img/character/walkingKnight.png";
        // } else {
        //     this.image.src = "img/character/idelingKnight.png";
        // }

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

    jump(posY0) {
        if (this.posY < posY0 - this.height) {
            this.posY += this.vy;
            this.vy += this.gravity;
        } else {
            this.vy = 1;
            this.posY = posY0 - this.height;
        }
    }

    move() {
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
                    if (this.posY === 120 - this.height || this.posY === 250 - this.height || this.posY === 563 - this.height || this.posY === 393 - this.height || this.posY === this.gameHeight - this.height) {
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
                this.movement = "moving-left";
                // console.log(this.movement);
            }
            if (e.keyCode === 39) {
                this.keyState.keyRight = true;
                this.movement = "moving-right";
                // console.log(this.movement);
            }
            return this.movement;
        });

        document.addEventListener('keyup', (e) => {
            // this.moving = false;
            // console.log(this.moving)
            e.preventDefault();
            if (e.keyCode === 37) {
                this.keyState.keyLeft = false;
                this.movement = "facing-left";
            }
            if (e.keyCode === 39) {
                this.keyState.keyRight = false;
                this.movement = "facing-right";
            }
            // return this.moving;
        });
        return this.movement;
    }

    animate(framesCounter) {

        if (this.movement) {
            if (framesCounter % 3 === 0) {
                this.framesIndex++;
                if (this.framesIndex > 9) this.framesIndex = 0;
            }
        } else {
            if (framesCounter % 8 === 0) {
                this.framesIndex++;
                if (this.framesIndex > 9) this.framesIndex = 0;
            }
        }




    }


}