// Advanced Modifying Images - Part 1

function greenScreen(fgImgName, bgImgName) {
    var fgImg = new SimpleImage(fgImgName);
    var bgImg = new SimpleImage(bgImgName);
    var output = new SimpleImage(fgImg.getWidth(), fgImg.getHeight());
    for (var pixel of fgImg.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
            output.setPixel(x, y, bgImg.getPixel(x, y));
        } else {
            output.setPixel(x, y, pixel);
        }
    }
    print(output);
}

greenScreen("drewRobert.png", "dinos.png");
