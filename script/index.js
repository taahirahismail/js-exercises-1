let first_number = 15;
let second_number = 17;
document.write("first_number: " + first_number + "<br/>");
document.write("second_number: " + second_number + "<br/><br/>");

// use temporary variable
let temp;

temp = first_number;
first_number = second_number;
second_number = temp;

document.write("first_number: " + first_number + "<br/>");
document.write("second_number: " + second_number + "<br/><br/>");

// use a destructuring assignment
first_number = 15;
second_number = 17;

[first_number, second_number] = [second_number, first_number];

document.write("first_number: " + first_number + "<br/>");
document.write("second_number: " + second_number + "<br/><br/>");

// use arithmetic operators
first_number = 15;
second_number = 17;

first_number = first_number + second_number;
second_number = first_number - second_number;
first_number = first_number - second_number;

document.write("first_number: " + first_number + "<br/>");
document.write("second_number: " + second_number + "<br/><br/>");

// functions exercise
const myName = "Taahirah";
function greet(myName) {
  console.log("Hello " + myName);
}
greet(myName);

let num1 = 2;
let num2 = 3;
function multiply(num1, num2) {
  console.log(num1 * num2);
}
multiply(num1, num2);

let num3 = 4;
function tableOfFive(num3) {
  return num3 * 5;
}
let xFive = tableOfFive(num3);
console.log(xFive);

// extra functions exercise
function calcIceCream() {
  let numb1, numb2, total;
  numb1 = parseInt(document.getElementById("numIC").value);
  numb2 = parseInt(document.getElementById("costIC").value);
  total = numb1 * numb2;
  document.getElementById("totalIC").value = total;
}

// For Loops Exercise
// task 1
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    document.write(i + " is even" + "<br/>");
  } else {
    document.write(i + " is odd" + "<br/>");
  }
}
document.write("<br/>");

// task 2
const subjectMark = [68, 75, 93, 82, 77];
let sum = 0;

subjectMark.forEach(function (num) {
  sum += num;
});
average = sum / subjectMark.length;
document.write("Average Subject Mark: " + average + " ");
let calculatedAverage = average;

if (average > 0 && average <= 59) {
  document.write("F");
} else if (average > 59 && average <= 69) {
  document.write("D");
} else if (average > 69 && average <= 79) {
  document.write("C");
} else if (average > 79 && average <= 89) {
  document.write("B");
} else {
  document.write("A");
}
document.write("<br/>");

// task 3
let summ = 0;

for (i = 0; i <= 20; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    summ = i += summ;
  }
}
document.write(summ);

// task 4
for (i = 0; i < 20; i++) {
    if ()
}