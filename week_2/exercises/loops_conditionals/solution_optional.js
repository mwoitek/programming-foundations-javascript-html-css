// Optional Exercise - Changes in Red

function changeRedOptional(width, height, green, blue) {
    var picture = new SimpleImage(width, height);
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var pixel = picture.getPixel(x, y);
            pixel.setRed(x);
            pixel.setGreen(green);
            pixel.setBlue(blue);
        }
    }
    return picture;
}

var result = changeRedOptional(256, 200, 200, 100);
print(result);
