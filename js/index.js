window.onload = function () {
    document.getElementById('str-button').onclick = function () {
        document.getElementById('title-screen').setAttribute('class', 'hide');
        Game.init();
    };
}