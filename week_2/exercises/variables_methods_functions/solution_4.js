// Exercise 4 - Perimeter of an Image

import { SimpleImage } from '../cs101/SimpleImage.js';
import { print } from '../cs101/cs101.js';

function perimeter(imageName) {
    var img = new SimpleImage(imageName);
    var height = img.getHeight();
    var width = img.getWidth();
    var answer = 2 * (height + width);
    return answer;
}

print(perimeter("rodger.png"));
