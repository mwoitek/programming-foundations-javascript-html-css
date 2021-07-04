var paintCanvas = document.getElementById("canvas1");
var context = paintCanvas.getContext("2d");
var color = "black";
var radius = 50;
// Only paint if mouse is being dragged (moved while button is pressed)
var isPainting = false;

// Verify the given value is actually a number
function isNumeric(value) {
    return !isNaN(value);
}

function setWidth(value) {
    if (isNumeric(value)) {
        paintCanvas.width = value;
    }
}

function setHeight(value) {
    if (isNumeric(value)) {
        paintCanvas.height = value;
    }
}

function startPaint() {
    isPainting = true;
}

function endPaint() {
    isPainting = false;
}

function paintCircle(x, y) {
    // Make sure to start a new circle each time
    context.beginPath();
    // Draw circle using a complete 2 * pi arc around given point
    context.arc(x, y, radius, 0, 2 * Math.PI, true);
    context.fillStyle = color;
    context.fill();
}

function doPaint(x, y) {
    if (isPainting) {
        paintCircle(x, y);
    }
}

function changeColor(newColor) {
    color = newColor;
}

function resizeBrush(newSize) {
    radius = newSize;
    document.getElementById("sizeOutput").value = newSize;
}

function clearCanvas() {
    context.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
}
