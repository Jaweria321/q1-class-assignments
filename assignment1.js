"use strict";
// Q1: area of rectangle
Object.defineProperty(exports, "__esModule", { value: true });
let length = 10;
let breadth = 7;
let area = length * breadth;
console.log(`Area of Rectangle: ${area}`);
// Q2 Volume of a cube
let side = 5;
let volume = side ** 3;
console.log(`Volume of a cube: ${volume}`);
// Q3 Check Number
let num = 9;
if (num > 0) {
    console.log("Positive Number");
}
else if (num < 0) {
    console.log("Negative Number");
}
else {
    console.log("Zero");
}
// Even Odd
let n = 21;
if (n % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}
// Eligible to vote
let person_age = 21;
if (person_age >= 18) {
    console.log("Eligible to Vote");
}
else {
    console.log("Not Eligible to Vote");
}
// Q6 Mathematical expression
let numerator = (10 + 5) * 3 - 2;
let denominator = (4 % 3) - 7;
let expression = numerator / denominator;
console.log(expression);
