// Modifying Images - Part 2

function swapRedGreen(pixel) {
    var red = pixel.getRed();
    var green = pixel.getGreen();
    pixel.setRed(green);
    pixel.setGreen(red);
}

function swapRedGreenImage(img) {
    for (var pixel of img.values()) {
        swapRedGreen(pixel);
    }
    print(img);
}

function threeVerticalStripes(imgName) {
    var img = new SimpleImage(imgName);
    var thirdWidth = img.getWidth() / 3;
    for (var pixel of img.values()) {
        var x = pixel.getX();
        if (x < thirdWidth) {
            pixel.setRed(255);
        } else if (x >= thirdWidth && x < 2 * thirdWidth) {
            pixel.setGreen(255);
        } else {
            pixel.setBlue(255);
        }
    }
    return img;
}

var picture = threeVerticalStripes("hilton.jpg");
print(picture);
swapRedGreenImage(picture);
