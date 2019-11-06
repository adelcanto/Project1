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
    fireballs: [],

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
            this.movement = this.player.movement;
            this.framesCounter++;
            this.clearFireballs();
            if (this.framesCounter % 90 === 0) this.generateFireballs();
            if (this.isCollision() === true) this.gameOver();
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
        this.platform = [new Platform(this.ctx, 89, this.posY0, this.tilesLength * 3.8, 1),
            new Platform(this.ctx, 685, this.posY0, this.tilesLength * 7.8, 1),
            new Platform(this.ctx, 855, 393, this.tilesLength * 3, 1),
            new Platform(this.ctx, 305, 250, this.tilesLength * 2.8, 1),
            new Platform(this.ctx, 985, 120, this.tilesLength * 6, 1),
        ]
        this.tiles = [
            this.tileGenerator(1, 0, 'img/tiles/17.png'),
            this.tileGenerator(1, 1, 'img/tiles/17.png'),
            this.tileGenerator(1, 4, 'img/tiles/17.png'),
            this.tileGenerator(1, 5, 'img/tiles/17.png'),
            this.tileGenerator(1, 6, 'img/tiles/17.png'),
            this.tileGenerator(1, 7, 'img/tiles/17.png'),
            this.tileGenerator(1, 8, 'img/tiles/17.png'),
            this.tileGenerator(1, 15, 'img/tiles/17.png'),
            this.tileGenerator(1, 16, 'img/tiles/17.png'),

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
            this.tileGenerator(1, 15, 'img/tiles/6.png'),

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
            this.tileGenerator(2, 15, 'img/tiles/3.png'),

            this.tileGenerator(4, 10, 'img/tiles/1.png'),
            this.tileGenerator(4, 11, 'img/tiles/2.png'),
            this.tileGenerator(4, 12, 'img/tiles/3.png'),
            this.tileGenerator(3, 10, 'img/tiles/4.png'),
            this.tileGenerator(3, 11, 'img/tiles/5.png'),
            this.tileGenerator(3, 12, 'img/tiles/6.png'),

            this.tileGenerator(5.7, 3.5, 'img/tiles/13.png'),
            this.tileGenerator(5.7, 4.5, 'img/tiles/14.png'),
            this.tileGenerator(5.7, 5.5, 'img/tiles/15.png'),

            this.tileGenerator(7.2, 11.5, 'img/tiles/1.png'),
            this.tileGenerator(7.2, 12.5, 'img/tiles/2.png'),
            this.tileGenerator(7.2, 13.5, 'img/tiles/2.png'),
            this.tileGenerator(7.2, 14.5, 'img/tiles/2.png'),
            this.tileGenerator(7.2, 15.5, 'img/tiles/2.png'),
            this.tileGenerator(7.2, 16.5, 'img/tiles/2.png'),
            // this.tileGenerator(7.2, 16.5, 'img/tiles/2.png'),

            this.tileGenerator(6.2, 11.5, 'img/tiles/12.png'),
            this.tileGenerator(6.2, 12.5, 'img/tiles/9.png'),
            this.tileGenerator(6.2, 13.5, 'img/tiles/9.png'),
            this.tileGenerator(6.2, 14.5, 'img/tiles/9.png'),
            this.tileGenerator(6.2, 15.5, 'img/tiles/9.png'),
            this.tileGenerator(6.2, 16.5, 'img/tiles/9.png'),
            // this.tileGenerator(6.2, 16.5, 'img/tiles/9.png'),
        ];

        this.enemies = new Enemies(this.ctx, 1200, 70, 50, 50, this.width);
        this.zombies = new Zombies(this.ctx, 450, 200, 50, 50, this.width);
        this.player = new Player(this.ctx, 105, 270, this.playerKeys, this.height, this.width);
    },

    drawAll: function () {
        this.background.draw();
        this.tiles.forEach(e => e.draw());

        this.enemies.draw();
        this.zombies.draw();
        this.player.draw(this.framesCounter);
        this.fireballs.forEach(fireball => fireball.draw());
        this.platform.forEach(e => e.draw());
    },

    moveAll: function () {
        let updatedFloor = this.height;
        this.platform.forEach((e) => {
            if ((this.player.posX >= e.posX - this.player.width / 2) && (this.player.posX + this.player.width / 2 <= (e.posX + e.platWidth)) && ((this.player.posY) <= e.posY - this.player.height / 2)) {
                updatedFloor = e.posY
            }
        });
        this.player.jump(updatedFloor);
        this.player.move();

        this.enemies.move();
        this.zombies.move();
        this.fireballs.forEach(fireball => fireball.move());
    },

    tileGenerator: function (tileRow, tileColumn, tileImage) {
        return new Tiles(this.ctx, this.tilesLength * tileColumn, this.height - this.tilesLength * tileRow, this.tilesLength, tileImage);
    },

    onPlatform: function (playerX, platformX, platformWidth, playerY, platformY) {
        if ((playerX >= platformX) && (playerX <= platformX + platformWidth) && (playerY + 86 <= platformY)) {
            return true;
        }
    },

    isCollision() {
        // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
        // return (this.player.posX + this.player.width > this.fireballs.posX &&
        let floorCollision = this.player.posY + this.player.height >= this.height;

        let enemyCollision = (this.player.posX + this.player.width > this.enemies.posX &&
            this.enemies.posX + this.enemies.width > this.player.posX &&
            this.player.posY + this.player.height > this.enemies.posY &&
            this.enemies.posY + this.enemies.height > this.player.posY)

        let zombieCollision = (this.player.posX + this.player.width > this.zombies.posX &&
            this.zombies.posX + this.zombies.width > this.player.posX &&
            this.player.posY + this.player.height > this.zombies.posY &&
            this.zombies.posY + this.zombies.height > this.player.posY)

        return zombieCollision || enemyCollision || floorCollision || this.fireballs.some(fireball => (this.player.posX + this.player.width > fireball.posX &&
            fireball.posX + fireball.width > this.player.posX &&
            this.player.posY + this.player.height > fireball.posY &&
            fireball.posY + fireball.height > this.player.posY))
    },

    generateFireballs() {
        this.fireballs.push((new Fireballs(this.ctx, this.width, 513, 50, 50)));
    },

    gameOver() {
        clearInterval(this.interval);
    },

    clearFireballs() {
        this.fireballs = this.fireballs.filter(fireball => fireball.posX >= 0);
    }
}