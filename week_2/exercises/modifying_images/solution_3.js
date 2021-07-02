// Modifying Images - Part 3

function turnYellow() {
    var dukeBlueDevil = new SimpleImage("duke_blue_devil.png");
    var dukeYellowDevil = new SimpleImage("duke_blue_devil.png");
    for (var pixel of dukeYellowDevil.values()) {
        var red = pixel.getRed();
        var green = pixel.getGreen();
        var blue = pixel.getBlue();
        if (blue > red && blue > green) {
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(0);
        }
    }
    print(dukeBlueDevil);
    print(dukeYellowDevil);
}

turnYellow();
