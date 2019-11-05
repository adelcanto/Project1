const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60,
    tilesLength: 128 * 2 / 3,
    posY0: 563,
    charOnPlatform: false,
    playerKeys: {
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        SPACE_BAR: 32
    },
    framesCounter: 0,
    

    // sprites: {
    //     idle: "img/character/idelingKnight.png",
    //     walk: "img/character/walkingKnight.png"
    // }

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
            // console.log("Game: ", this.movement);
            // console.log("Player: ", this.player.movement);
            this.movement = this.player.movement;
            this.framesCounter++;
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
        this.platform = [new Platform(this.ctx, 85, this.posY0, this.tilesLength * 4, 1),
            new Platform(this.ctx, 685, this.posY0, this.tilesLength * 8, 1),
            new Platform(this.ctx, 855, 393, this.tilesLength * 3, 1),
            new Platform(this.ctx, 305, 250, this.tilesLength * 3, 1),
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

            this.tileGenerator(4, 10, 'img/tiles/1.png'),
            this.tileGenerator(4, 11, 'img/tiles/2.png'),
            this.tileGenerator(4, 12, 'img/tiles/3.png'),
            this.tileGenerator(3, 10, 'img/tiles/4.png'),
            this.tileGenerator(3, 11, 'img/tiles/5.png'),
            this.tileGenerator(3, 12, 'img/tiles/6.png'),
            


        ];
        this.player = new Player(this.ctx, 105, 270, this.playerKeys, this.height, this.width); 
    },

    drawAll: function () {
        this.background.draw();
        this.platform.forEach(e => e.draw());
        this.tiles.forEach(e => e.draw());
        this.player.draw(this.framesCounter);
    },

    moveAll: function () {
        
        let updatedFloor = this.height;
        
        this.platform.forEach((e) => {
            if ((this.player.posX >= e.posX) && (this.player.posX <= (e.posX + e.platWidth)) && ((this.player.posY ) <= e.posY)) { 
                updatedFloor = e.posY     
                // console.log(updatedFloor)   
            }
        });
        this.player.jump(updatedFloor);
        this.player.move();
    },

    tileGenerator: function (tileRow, tileColumn, tileImage) {
        return new Tiles(this.ctx, this.tilesLength * tileColumn, this.height - this.tilesLength * tileRow, this.tilesLength, tileImage);
    },

    onPlatform: function (playerX, platformX, platformWidth, playerY, platformY) {
        if ((playerX >= platformX) && (playerX <= platformX + platformWidth) && (playerY + 86 <= platformY)) {
            return true;
        }
    },

    
}

