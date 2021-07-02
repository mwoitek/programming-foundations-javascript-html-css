// Modifying Images - Part 1

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
    print(img);
}

threeVerticalStripes("hilton.jpg");
