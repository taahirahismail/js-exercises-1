let first_number = 15;
let second_number = 17;
document.write('first_number: ' + first_number + '<br/>')
document.write('second_number: ' + second_number + '<br/><br/>')

// use temporary variable
let temp;

temp = first_number;
first_number = second_number;
second_number = temp;

document.write('first_number: ' + first_number + '<br/>');
document.write('second_number: ' + second_number + '<br/><br/>');

// use a destructuring assignment
first_number = 15;
second_number = 17;

[first_number, second_number] = [second_number, first_number];

document.write('first_number: ' + first_number + '<br/>');
document.write('second_number: ' + second_number + '<br/><br/>');

// use arithmetic operators
first_number = 15;
second_number = 17;

first_number = first_number + second_number;
second_number = first_number - second_number;
first_number = first_number - second_number;

document.write('first_number: ' + first_number + '<br/>');
document.write('second_number: ' + second_number + '<br/><br/>');