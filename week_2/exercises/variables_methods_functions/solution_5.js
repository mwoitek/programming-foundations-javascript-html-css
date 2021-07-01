// Exercise 5 - Print the RGB Values of a Pixel

import { SimpleImage } from '../cs101/SimpleImage.js';
import { print } from '../cs101/cs101.js';

function printPixel(nameImage, xpos, ypos) {
    var img = new SimpleImage(nameImage);
    var pixel = img.getPixel(xpos, ypos);
    var red = pixel.getRed();
    var green = pixel.getGreen();
    var blue = pixel.getBlue();
    print("red is " + red);
    print("green is " + green);
    print("blue is " + blue);
}

printPixel("drewgreen.png", 10, 10);
printPixel("drewgreen.png", 250, 500);
