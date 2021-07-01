// Exercise 3 - Number of Pixels in an Image

import { SimpleImage } from '../cs101/SimpleImage.js';
import { print } from '../cs101/cs101.js';

function numberPixels(namefile) {
    var someImg = new SimpleImage(namefile);
    var height = someImg.getHeight();
    var width = someImg.getWidth();
    var answer = height * width;
    return answer;
}

var result = numberPixels("chapel.png");
print(result);

result = numberPixels("dinos.png");
print(result);
