

window.onload = function () {
    let audio1 = new Audio();
    audio1.src = 'audio/screensMusic.mp3';

    document.onmousemove = function () {
        audio1.play();
    }

    document.getElementById('str-button').onclick = function () {
        audio1.pause();
        document.getElementById("canvas").style.display = "block"
        document.getElementById('title-screen').setAttribute('class', 'hide');
        Game.init();
    };
}

document.getElementById('game-over-button').onclick = function () {
    document.getElementById('game-over').setAttribute('class', 'hide');
    document.getElementById('canvas').removeAttribute('class');
    document.getElementById("canvas").style.display = "block"
    Game.init();
}

document.getElementById('you-win-button').onclick = function () {
    document.getElementById('you-win').setAttribute('class', 'hide');
    document.getElementById('canvas').removeAttribute('class');
    document.getElementById("canvas").style.display = "block"
    Game.init();
}

