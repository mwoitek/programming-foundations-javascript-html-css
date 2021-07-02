// Exercise 4 - Add Thick Black Line to Bottom of Owen

function addLineBottom(imgName, numRows) {
    var img = new SimpleImage(imgName);
    var yUnmodified = img.getHeight() - numRows;
    for (var pixel of img.values()) {
        var y = pixel.getY();
        if (y > yUnmodified) {
            pixel.setRed(0);
            pixel.setGreen(0);
            pixel.setBlue(0);
        }
    }
    print(img);
}

addLineBottom("astrachan.jpg", 10);
