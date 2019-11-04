class Background {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = 1000;
        this.height = height;
        
        this.posX = 0;
        this.posY = 0;

        this.image = new Image();
        this.image.src = 'img/BG.png';

    }

    draw(){
        this.ctx.drawImage(this.image,this.posX, this.posY, this.width, this.height);
        this.ctx.drawImage(this.image,this.posX + this.width, this.posY, this.width, this.height);
    }
} 