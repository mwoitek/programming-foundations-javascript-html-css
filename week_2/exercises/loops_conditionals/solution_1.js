// Exercise 1 - Turn the Chapel Red

function turnRed(imgName) {
    var img = new SimpleImage(imgName);
    for (var pixel of img.values()) {
        pixel.setRed(255);
    }
    print(img);
}

turnRed("chapel.png");
