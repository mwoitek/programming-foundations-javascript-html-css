// Exercise 5 - Green Square in Top Left Corner

function greenSquareTopLeft(imgName, sideLength) {
    var img = new SimpleImage(imgName);
    for (var pixel of img.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        if (x < sideLength && y < sideLength) {
            pixel.setRed(0);
            pixel.setGreen(255);
            pixel.setBlue(0);
        }
    }
    print(img);
}

greenSquareTopLeft("chapel.png", 50);
