let screensMusic = new Audio();
screensMusic.src = 'audio/screensMusic.mp3';
screensMusic.play();

window.onload = function () {

    document.getElementById('str-button').onclick = function () {
        document.getElementById('title-screen').setAttribute('class', 'hide');
        screensMusic.pause();
        Game.init();
    };
}

document.getElementById('game-over-button').onclick = function () {
    document.getElementById('game-over').setAttribute('class', 'hide');
    document.getElementById('canvas').removeAttribute('class');
    Game.init();
}

document.getElementById('you-win-button').onclick = function () {
    document.getElementById('you-win').setAttribute('class', 'hide');
    document.getElementById('canvas').removeAttribute('class');
    Game.init();
}