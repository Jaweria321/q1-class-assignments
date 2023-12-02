// Q1: area of rectangle

let length:number = 10;
let breadth:number = 7;
let area:number = length * breadth;
console.log(`Area of Rectangle: ${area}`);

// Q2 Volume of a cube
let side:number = 5;
let volume:number = side ** 3;
console.log(`Volume of a cube: ${volume}`);
// Q3 Check Number
let num:number = 9;
if(num > 0) {
    console.log("Positive Number");
}
else if(num <0) {
    console.log("Negative Number");
}
else {
    console.log("Zero");
}

// Even Odd
let n = 21;
if(n %2==0) {
    console.log("even");   
}
else {
    console.log("odd");
}
// Eligible to vote
let person_age:number = 21;
if(person_age >= 18) {
    console.log("Eligible to Vote");
}
else {
    console.log("Not Eligible to Vote");
}
// Q6 Mathematical expression
let numerator:number = (10 + 5) * 3 - 2;
let denominator:number = (4 % 3) - 7; 
let expression:number = numerator / denominator;
console.log(expression);

export {};