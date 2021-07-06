var canvasForeground = document.getElementById("canvasForeground");
var canvasBackground = document.getElementById("canvasBackground");

var divCompositeImage = document.getElementById("compositeImage");

var imgForeground = null;
var imgBackground = null;

function fitCanvasToImage(canvas, img) {
    canvas.height = img.getHeight();
    canvas.width = img.getWidth();
}

function upload(fileInputId) {
    var fileInput = document.getElementById(fileInputId);
    if (fileInputId == "fileForeground") {
        imgForeground = new SimpleImage(fileInput);
        fitCanvasToImage(canvasForeground, imgForeground);
        imgForeground.drawTo(canvasForeground);
    } else {
        imgBackground = new SimpleImage(fileInput);
        fitCanvasToImage(canvasBackground, imgBackground);
        imgBackground.drawTo(canvasBackground);
    }
}

function clearCanvas(canvas) {
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.height = 150;
    canvas.width = 300;
}

function clearCanvases() {
    clearCanvas(canvasForeground);
    clearCanvas(canvasBackground);
}

function clearFileInputs() {
    document.getElementById("fileForeground").value = null;
    document.getElementById("fileBackground").value = null;
}

function clearImages() {
    imgForeground = null;
    imgBackground = null;
}

function clearAll() {
    clearCanvases();
    clearFileInputs();
    clearImages();
    divCompositeImage.hidden = true;
}

function isImageNotLoaded(img) {
    return img == null || !img.complete();
}

function areImagesSameSize() {
    var sameHeight = imgForeground.getHeight() == imgBackground.getHeight();
    var sameWidth = imgForeground.getWidth() == imgBackground.getWidth();
    return sameHeight && sameWidth;
}

function createCompositeImage() {
    var imgComposite = new SimpleImage(
        imgForeground.getWidth(),
        imgForeground.getHeight()
    );
    for (var pixel of imgForeground.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
            imgComposite.setPixel(x, y, imgBackground.getPixel(x, y));
        } else {
            imgComposite.setPixel(x, y, pixel);
        }
    }
    return imgComposite;
}

function doGreenScreen() {
    if (isImageNotLoaded(imgForeground)) {
        alert("The foreground image has not been loaded!");
        return;
    } else if (isImageNotLoaded(imgBackground)) {
        alert("The background image has not been loaded!");
        return;
    } else if (!areImagesSameSize()) {
        alert("The images have different sizes!");
        return;
    } else {
        var canvasComposite = document.getElementById("canvasComposite");
        var imgComposite = createCompositeImage();
        fitCanvasToImage(canvasComposite, imgComposite);
        imgComposite.drawTo(canvasComposite);
        divCompositeImage.hidden = false;
    }
}
