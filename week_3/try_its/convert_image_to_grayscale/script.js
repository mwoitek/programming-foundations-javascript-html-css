var canvasGrayscale = document.getElementById("canvasGrayscale");
var imgOriginal;
var imgGrayscale;

function resizeCanvas(canvas, height, width) {
    canvas.style.height = height;
    canvas.style.width = width;
}

function upload() {
    canvasGrayscale.hidden = true;

    var fileInput = document.getElementById("fileInput");

    imgOriginal = new SimpleImage(fileInput);
    imgGrayscale = new SimpleImage(fileInput);

    var canvasOriginal = document.getElementById("canvasOriginal");
    resizeCanvas(
        canvasOriginal,
        imgOriginal.getHeight(),
        imgOriginal.getWidth()
    );

    imgOriginal.drawTo(canvasOriginal);

    var btnMakeGray = document.getElementById("btnMakeGray");
    btnMakeGray.disabled = false;
}

function computeAverage(red, green, blue) {
    return (red + green + blue) / 3;
}

function makePixelGray(pixel) {
    var average = computeAverage(
        pixel.getRed(),
        pixel.getGreen(),
        pixel.getBlue()
    );
    pixel.setRed(average);
    pixel.setGreen(average);
    pixel.setBlue(average);
}

function makeGray() {
    resizeCanvas(
        canvasGrayscale,
        imgGrayscale.getHeight(),
        imgGrayscale.getWidth()
    );

    for (var pixel of imgGrayscale.values()) {
        makePixelGray(pixel);
    }

    imgGrayscale.drawTo(canvasGrayscale);
    canvasGrayscale.hidden = false;
}
