function computeAverage(red, green, blue) {
    return (red + green + blue) / 3;
}

// Grayscale Filter

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

function filterGray() {
    for (var pixel of grayImage.values()) {
        makePixelGray(pixel);
    }
}

function doGray() {
    if (isImageNotLoaded(grayImage)) {
        alert("The image is not loaded!");
    } else {
        filterGray();
        grayImage.drawTo(canvas);
    }
}

// Red Filter

function filterRed() {
    for (var pixel of redImage.values()) {
        pixel.setRed(255);
    }
}

function doRed() {
    if (isImageNotLoaded(redImage)) {
        alert("The image is not loaded!");
    } else {
        filterRed();
        redImage.drawTo(canvas);
    }
}
