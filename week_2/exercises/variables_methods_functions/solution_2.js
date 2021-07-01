// Exercise 2 - Format a Name

import { print } from '../cs101/cs101.js';

function reformatName(first, last) {
    var answer = last + ", " + first;
    return answer;
}

var result = reformatName("Susan", "Rodger");
print(result);

result = reformatName("Robert", "Duvall");
print(result);
