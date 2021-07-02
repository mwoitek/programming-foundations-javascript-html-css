// Exercise 3 - Turn the Eggs Less Red

function turnLessRed(imgName, redValue) {
    var img = new SimpleImage(imgName);
    for (var pixel of img.values()) {
        var red = pixel.getRed();
        if (red > redValue) {
            pixel.setRed(redValue);
        }
    }
    print(img);
}

turnLessRed("eastereggs.jpg", 70);
