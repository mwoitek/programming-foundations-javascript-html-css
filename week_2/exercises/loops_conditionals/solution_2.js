// Exercise 2 - Remove All the Red

function removeRed(imgName) {
    var img = new SimpleImage(imgName);
    for (var pixel of img.values()) {
        pixel.setRed(0);
    }
    print(img);
}

removeRed("chapel.png");
