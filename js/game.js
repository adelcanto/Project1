const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60,
    tilesLength: 128 * 2 / 3,
    posY0: 650,
    playerKeys: {
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        SPACE_BAR: 32
    },
    framesCounter: 0,

    init: function () {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.height = this.height;
        this.canvas.width = this.width;
        this.start();
    },

    start: function () {
        this.setElements();
        this.interval = setInterval(() => {
            this.clear();
            this.drawAll();
            this.moveAll();
        }, 1000 / this.fps);
    },

    clear: function () {
        this.ctx.clearRect(0, 0, this.width, this.heigth);
    },

    setElements: function () {
        this.background = new Background(this.ctx, this.width, this.height);
        this.platform = [new Platform(this.ctx, 80, 650, this.tilesLength * 4, 1),
            new Platform(this.ctx, 680, 650, this.tilesLength * 8, 1),
            // new Platform(this.ctx,850, 565, this.tilesLength * 3, 1)
        ]

        this.tiles = [
            this.tileGenerator(1, 0, 'img/tiles/17.png'),
            this.tileGenerator(1, 1, 'img/tiles/17.png'),
            this.tileGenerator(1, 4, 'img/tiles/17.png'),
            this.tileGenerator(1, 5, 'img/tiles/17.png'),
            this.tileGenerator(1, 6, 'img/tiles/17.png'),
            this.tileGenerator(1, 7, 'img/tiles/17.png'),
            this.tileGenerator(1, 8, 'img/tiles/17.png'),

            this.tileGenerator(1, 1, 'img/tiles/4.png'),
            this.tileGenerator(1, 2, 'img/tiles/5.png'),
            this.tileGenerator(1, 3, 'img/tiles/5.png'),
            this.tileGenerator(1, 4, 'img/tiles/6.png'),
            this.tileGenerator(1, 8, 'img/tiles/4.png'),
            this.tileGenerator(1, 9, 'img/tiles/5.png'),
            this.tileGenerator(1, 10, 'img/tiles/5.png'),
            this.tileGenerator(1, 11, 'img/tiles/5.png'),
            this.tileGenerator(1, 12, 'img/tiles/5.png'),
            this.tileGenerator(1, 13, 'img/tiles/5.png'),
            this.tileGenerator(1, 14, 'img/tiles/5.png'),
            this.tileGenerator(1, 15, 'img/tiles/5.png'),

            this.tileGenerator(2, 1, 'img/tiles/1.png'),
            this.tileGenerator(2, 2, 'img/tiles/2.png'),
            this.tileGenerator(2, 3, 'img/tiles/2.png'),
            this.tileGenerator(2, 4, 'img/tiles/3.png'),
            this.tileGenerator(2, 8, 'img/tiles/1.png'),
            this.tileGenerator(2, 9, 'img/tiles/2.png'),
            this.tileGenerator(2, 10, 'img/tiles/2.png'),
            this.tileGenerator(2, 11, 'img/tiles/2.png'),
            this.tileGenerator(2, 12, 'img/tiles/2.png'),
            this.tileGenerator(2, 13, 'img/tiles/2.png'),
            this.tileGenerator(2, 14, 'img/tiles/2.png'),
            this.tileGenerator(2, 15, 'img/tiles/2.png'),

            this.tileGenerator(3, 10, 'img/tiles/1.png'),
            this.tileGenerator(3, 11, 'img/tiles/2.png'),
            this.tileGenerator(3, 12, 'img/tiles/3.png')


        ];

        this.player = new Player(this.ctx, 105, 270, "img/character/idelingKnight.png", this.playerKeys, this.height, this.width, this.posY0 - 88); // 670 - 88 + 5 (PosY0 - player.height + ajuste por borde)
        ;
        this.onPlatform(this.playerX, this.playerY, this.platformX, this.platformY, this.platformWidth);
        console.log(this.player.posX);
    },

    drawAll: function () {
        this.background.draw();
        this.tiles.forEach(e => e.draw());
        this.platform.forEach(e => e.draw());
        this.player.draw(this.framesCounter);
    },

    moveAll: function () {

        this.platform.forEach(e => {
            if ((this.player.posX >= e.posX) && (this.player.posX <= (e.posX + e.platWidth)) && ((this.player.posY) <= e.posY)) {
                this.posY0 = e.posY;
            } else {
                this.posY0 = this.height;
            } 
            this.player.move(this.posY0);  
        })
        
    },

    tileGenerator: function (tileRow, tileColumn, tileImage) {
        return new Tiles(this.ctx, this.tilesLength * tileColumn, this.height - this.tilesLength * tileRow, this.tilesLength, tileImage);
    },

    onPlatform: function (playerX, playerY, platformX, platformY, platformWidth) {
        if (playerX >= platformX && playerX <= platformX + platformWidth) {
            console.log("sobre plataforma");
        }
    }
}