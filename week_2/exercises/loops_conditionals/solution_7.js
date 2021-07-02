// Exercise 7 - Changes in Red

function changeRed(width, height) {
    var picture = new SimpleImage(width, height);
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var pixel = picture.getPixel(x, y);
            pixel.setRed(x);
        }
    }
    return picture;
}

var result = changeRed(256, 200);
print(result);
