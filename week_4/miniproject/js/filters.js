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

// Rainbow Filter

function makePixelOrange(pixel) {
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
        newGreen = 0.8 * average;
        newBlue = 0;
    } else {
        newRed = 255;
        newGreen = 1.2 * average - 51;
        newBlue = doubleAverage - 255;
    }

    pixel.setRed(newRed);
    pixel.setGreen(newGreen);
    pixel.setBlue(newBlue);
}

function makePixelYellow(pixel) {
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
        newGreen = doubleAverage;
        newBlue = 0;
    } else {
        newRed = 255;
        newGreen = 255;
        newBlue = doubleAverage - 255;
    }

    pixel.setRed(newRed);
    pixel.setGreen(newGreen);
    pixel.setBlue(newBlue);
}

function makePixelGreen(pixel) {
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
        newRed = 0;
        newGreen = doubleAverage;
        newBlue = 0;
    } else {
        newRed = doubleAverage - 255;
        newGreen = 255;
        newBlue = doubleAverage - 255;
    }

    pixel.setRed(newRed);
    pixel.setGreen(newGreen);
    pixel.setBlue(newBlue);
}

function makePixelBlue(pixel) {
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
        newRed = 0;
        newGreen = 0;
        newBlue = doubleAverage;
    } else {
        newRed = doubleAverage - 255;
        newGreen = doubleAverage - 255;
        newBlue = 255;
    }

    pixel.setRed(newRed);
    pixel.setGreen(newGreen);
    pixel.setBlue(newBlue);
}

function makePixelIndigo(pixel) {
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
        newRed = 0.8 * average;
        newGreen = 0;
        newBlue = doubleAverage;
    } else {
        newRed = 1.2 * average - 51;
        newGreen = doubleAverage - 255;
        newBlue = 255;
    }

    pixel.setRed(newRed);
    pixel.setGreen(newGreen);
    pixel.setBlue(newBlue);
}

function makePixelViolet(pixel) {
    var average = computeAverage(
        pixel.getRed(),
        pixel.getGreen(),
        pixel.getBlue()
    );
    var tmp1 = 1.6 * average;
    var tmp2 = 0.4 * average + 153;

    var newRed;
    var newGreen;
    var newBlue;

    if (average < 128) {
        newRed = tmp1;
        newGreen = 0;
        newBlue = tmp1;
    } else {
        newRed = tmp2;
        newGreen = 2 * average - 255;
        newBlue = tmp2;
    }

    pixel.setRed(newRed);
    pixel.setGreen(newGreen);
    pixel.setBlue(newBlue);
}

function computeStripesBoundaries(imageHeight) {
    var stripeHeight = Math.trunc(imageHeight / 7);

    // Computing the lower boundaries
    var lowerBoundaries = [];
    for (var i = 0; i < 7; i++) {
        lowerBoundaries.push(i * stripeHeight);
    }

    // Computing the upper boundaries
    var upperBoundaries = [];
    for (var i = 1; i < 7; i++) {
        upperBoundaries.push(i * stripeHeight - 1);
    }
    upperBoundaries.push(imageHeight - 1);

    var stripesBoundaries = {
        red: [0, 0],
        orange: [0, 0],
        yellow: [0, 0],
        green: [0, 0],
        blue: [0, 0],
        indigo: [0, 0],
        violet: [0, 0],
    };
    for (var color in stripesBoundaries) {
        stripesBoundaries[color][0] = lowerBoundaries.shift();
        stripesBoundaries[color][1] = upperBoundaries.shift();
    }
    return stripesBoundaries;
}

function isWithinBoundaries(value, [lowerBoundary, upperBoundary]) {
    return value >= lowerBoundary && value <= upperBoundary;
}

function makePixelRainbow(pixel, stripesBoundaries) {
    var colorFunctions = {
        red: makePixelRed,
        orange: makePixelOrange,
        yellow: makePixelYellow,
        green: makePixelGreen,
        blue: makePixelBlue,
        indigo: makePixelIndigo,
        violet: makePixelViolet,
    };
    var y = pixel.getY();
    for (var color in stripesBoundaries) {
        if (isWithinBoundaries(y, stripesBoundaries[color])) {
            colorFunctions[color](pixel);
            break;
        }
    }
}

function filterRainbow() {
    var stripesBoundaries = computeStripesBoundaries(rainbowImage.getHeight());
    for (var pixel of rainbowImage.values()) {
        makePixelRainbow(pixel, stripesBoundaries);
    }
}

function doRainbow() {
    if (isImageNotLoaded(rainbowImage)) {
        alert("The image is not loaded!");
    } else {
        filterRainbow();
        rainbowImage.drawTo(canvas);
    }
}
