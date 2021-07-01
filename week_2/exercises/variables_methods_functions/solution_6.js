// Exercise 6 - Sum of the RGB Values for a Pixel

import { SimpleImage } from '../cs101/SimpleImage.js';
import { print } from '../cs101/cs101.js';

function sumPixel(nameOfImage, xpos, ypos) {
    var img = new SimpleImage(nameOfImage);
    var pixel = img.getPixel(xpos, ypos);
    var red = pixel.getRed();
    var green = pixel.getGreen();
    var blue = pixel.getBlue();
    var answer = red + green + blue;
    return answer;
}

var answer = sumPixel("drewgreen.png", 250, 500);
print(answer);

answer = sumPixel("drewgreen.png", 10, 10);
print(answer);
