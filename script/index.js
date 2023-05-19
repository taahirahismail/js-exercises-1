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

// functions exercise
const myName = 'Taahirah';
function greet(myName) {
    console.log('Hello ' + myName);
}
greet(myName);

let num1 = 2
let num2 = 3
function multiply(num1, num2) {
    console.log(num1 * num2);
}
multiply(num1, num2);

let num3 = 4
function tableOfFive(num3) {
    return num3 * 5;
}
let xFive = tableOfFive(num3)
console.log(xFive);

// extra functions exercise
function calcIceCream() {
    let numb1, numb2, total;
    numb1 = parseInt(document.getElementById("numIC").value);
    numb2 = parseInt(document.getElementById("costIC").value);
    total = numb1 * numb2;
    document.getElementById("totalIC").value = total
}