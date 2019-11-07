class Background {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = 1000;
        this.height = height;
        
        this.posX = 0;
        this.posY = 0;
        this.vx = -2;
        this.vy = 1

        this.image = new Image();
        this.image.src = 'img/BG.png';

        this.setListeners();
        this.keyState = {
            keyLeft: false,
            keyRight: false,
            keyUp: false
        };
    }
    
    draw(){
       
        this.ctx.beginPath();
        this.ctx.fillRect(0,-300,1900,500);
        this.ctx.fillStyle = "#DDF8FF";
        this.ctx.closePath();
       
        this.ctx.drawImage(this.image,this.posX, this.posY, this.width, this.height);
        

        this.ctx.drawImage(this.image,this.posX + this.width, this.posY, this.width, this.height);
       
        
        
    }

    move(playerVY) {
        if (this.keyState.keyLeft) {
            this.posX -= this.vx;
        }
        if (this.keyState.keyRight) {
            this.posX += this.vx;
        }
        this.posY -= (playerVY-1)/9;

    }

    setListeners() {
        document.addEventListener('keydown', (e) => {
            e.preventDefault();
            if (e.keyCode === 37) {
                this.keyState.keyLeft = true;
            }
            if (e.keyCode === 39) {
                this.keyState.keyRight = true;
            }
            if (e.keyCode === 38) {
                this.keyState.keyUp = true;
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
            if (e.keyCode === 38) {
                this.keyState.keyUp = false;
            }
        });
    }
} 