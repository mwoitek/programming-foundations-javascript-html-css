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

function makePixelRed(pixel) {
    var average = computeAverage(
        pixel.getRed(),
        pixel.getGreen(),
        pixel.getBlue()
    );
    var doubleAverage = 2 * average;

    var newRed;
    var newGreen;
    var newBlue;

    if (average < 128) {
        newRed = doubleAverage;
        newGreen = 0;
        newBlue = 0;
    } else {
        newRed = 255;
        newGreen = doubleAverage - 255;
        newBlue = doubleAverage - 255;
    }

    pixel.setRed(newRed);
    pixel.setGreen(newGreen);
    pixel.setBlue(newBlue);
}

function filterRed() {
    for (var pixel of redImage.values()) {
        makePixelRed(pixel);
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

// Sepia Filter

function normalizeRGBValue(RGBValue) {
    return Math.min(RGBValue, 255);
}

function makePixelSepia(pixel) {
    var red = pixel.getRed();
    var green = pixel.getGreen();
    var blue = pixel.getBlue();

    var newRed = normalizeRGBValue(0.393 * red + 0.769 * green + 0.189 * blue);
    var newGreen = normalizeRGBValue(
        0.349 * red + 0.686 * green + 0.168 * blue
    );
    var newBlue = normalizeRGBValue(0.272 * red + 0.534 * green + 0.131 * blue);

    pixel.setRed(newRed);
    pixel.setGreen(newGreen);
    pixel.setBlue(newBlue);
}

function filterSepia() {
    for (var pixel of sepiaImage.values()) {
        makePixelSepia(pixel);
    }
}

function doSepia() {
    if (isImageNotLoaded(sepiaImage)) {
        alert("The image is not loaded!");
    } else {
        filterSepia();
        sepiaImage.drawTo(canvas);
    }
}
