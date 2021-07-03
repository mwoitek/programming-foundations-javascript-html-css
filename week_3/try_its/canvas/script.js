function changeColor() {
    var firstCanvas = document.getElementById("first_canvas");
    var secondCanvas = document.getElementById("second_canvas");
    firstCanvas.className = "dark_sea_green";
    secondCanvas.className = "english_lavender";
}

function doBlack() {
    var firstCanvas = document.getElementById("first_canvas");
    firstCanvas.style.backgroundColor = "black";

    var context = firstCanvas.getContext("2d");

    context.fillStyle = "#346751";
    context.fillRect(10, 10, 120, 60);

    context.fillStyle = "#C84B31";
    context.fillRect(10, 80, 120, 60);

    context.fillStyle = "#ECDBBA";
    context.font = "20px Helvetica, Arial, sans-serif";
    context.fillText("Some Text", 20, 110);
}

function doWhite() {
    var firstCanvas = document.getElementById("first_canvas");
    firstCanvas.style.backgroundColor = "white";

    var context = firstCanvas.getContext("2d");
    context.clearRect(0, 0, firstCanvas.width, firstCanvas.height);
}
