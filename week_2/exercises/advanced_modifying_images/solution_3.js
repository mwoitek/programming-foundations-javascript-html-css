// Advanced Modifying Images - Part 3

function setBlack(pixel) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
}

function isInsideInterval(coord, coordMin, coordMax) {
    return coord >= coordMin && coord < coordMax;
}

function drawBlackRectangle(img, xTopLeft, yTopLeft, width, height) {
    var xMin = xTopLeft;
    var xMax = xTopLeft + width;
    var yMin = yTopLeft;
    var yMax = yTopLeft + height;
    for (var pixel of img.values()) {
        if (isInsideInterval(pixel.getX(), xMin, xMax) && isInsideInterval(pixel.getY(), yMin, yMax)) {
            setBlack(pixel);
        }
    }
}

function addBorder(imgName, borderThickness) {
    var img = new SimpleImage(imgName);
    print(img);
    var imgHeight = img.getHeight();
    var imgWidth = img.getWidth();
    drawBlackRectangle(img, 0, 0, imgWidth, borderThickness);
    drawBlackRectangle(img, 0, imgHeight - borderThickness, imgWidth, borderThickness);
    drawBlackRectangle(img, 0, 0, borderThickness, imgHeight);
    drawBlackRectangle(img, imgWidth - borderThickness, 0, borderThickness, imgHeight);
    print(img);
}

addBorder("smallpanda.png", 10);
