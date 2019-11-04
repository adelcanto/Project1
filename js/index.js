window.onload = function () {
    document.getElementById('str-button').onclick = function () {
        console.log("hola");
        document.getElementById('title-screen').setAttribute('class', 'hide');
        Game.init();
    };
}