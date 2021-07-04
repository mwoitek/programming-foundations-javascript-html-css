function changeCanvasColor() {
    var canvas = document.getElementById("myCanvas");
    var colorPicker = document.getElementById("colorPicker");
    canvas.style.backgroundColor = colorPicker.value;
}

function doSquare() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var mySlider = document.getElementById("mySlider");
    var sideLength = parseInt(mySlider.value);

    context.fillStyle = "#346751";
    context.fillRect(10, 10, sideLength, sideLength);

    context.fillStyle = "#C84B31";
    context.fillRect(10, sideLength + 20, sideLength, sideLength);
}
