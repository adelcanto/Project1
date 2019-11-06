class Background {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = 1000;
        this.height = height;
        
        this.posX = 0;
        this.posY = 0;
        this.vx = -1;
        this.vy = 0.5

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
        this.ctx.drawImage(this.image,this.posX, this.posY, this.width, this.height);
        
        this.ctx.drawImage(this.image,this.posX, this.posY - 2*this.height, this.width, -this.height);
        // this.ctx.scale(0,-1)
        
        this.ctx.drawImage(this.image,this.posX + this.width, this.posY, this.width, this.height);
        
        this.ctx.drawImage(this.image,this.posX + this.width, this.posY - 2*this.height, this.width, -this.height);
        // this.ctx.scale(0,-1)
       
        // this.ctx.fillRect(0,-500,1000,500);
        // this.ctx.fillStyle = "red";
        
    }

    move() {
        if (this.keyState.keyLeft) {
            this.posX -= this.vx;
        }
        if (this.keyState.keyRight) {
            this.posX += this.vx;
        }
        if (this.keyState.keyUp){
            this.posY += this.vy;
        }

        // this.posY += this.vy
        // if (!this.keyState.keyUp){
        //     this.posY -= this.vy;
        // }
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