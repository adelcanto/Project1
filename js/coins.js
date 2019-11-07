class Coins {
    constructor(ctx, posX, posY, coinStyle) {
        this.ctx = ctx,
            this.posX = posX,
            this.posY = posY,
            this.width = 120,
            this.height = 120,
            this.image = new Image(),
            this.framesIndex = 0,
            this.frames = 10,
            this.coinStyle = coinStyle
    }

    draw(framesCounter) {
        // this.ctx.drawImage(this.image, this.posX, this.posY, 120, 120)

        switch (this.coinStyle) {
            case 'bronze':
                this.image.src = 'img/coins/bronzeCoin.png';
                break;
            case 'silver':
                this.image.src = 'img/coins/silverCoin.png';
                break;
            case 'gold':
                this.image.src = 'img/coins/goldCoin.png';
                break;
        }

        this.ctx.drawImage(
            this.image,
            this.framesIndex * (this.image.width / this.frames),
            0,
            this.image.width / this.frames,
            this.image.height,
            this.posX,
            this.posY,
            this.width,
            this.height
        )
        this.animate(framesCounter);
    }

    animate(framesCounter) {
        if (framesCounter % 7 === 0) {
            this.framesIndex++;
            if (this.framesIndex > 7) this.framesIndex = 0;
        }
    }

}