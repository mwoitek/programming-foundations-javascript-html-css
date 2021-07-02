// Exercise 6 - Rectangle of Any Color in Top Right Corner

function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
    var newImage = someImage;
    var xUnmodified = newImage.getWidth() - cornerWidth;
    for (var pixel of newImage.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        if (x > xUnmodified && y < cornerHeight) {
            pixel.setRed(red);
            pixel.setGreen(green);
            pixel.setBlue(blue);
        }
    }
    return newImage;
}

var picture = new SimpleImage("chapel.png");
var result = topRightCorner(30, 60, picture, 255, 255, 0);
print(result);

var picture2 = new SimpleImage("smalllion.jpg");
var result2 = topRightCorner(125, 20, picture2, 255, 0, 0);
print(result2);
