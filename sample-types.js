"use strict";
exports.__esModule = true;
var found = true;
var grade = 88.6;
var firstName = "Anup";
var lastName = "Kumar";
var fullName = firstName + lastName;
// console.log(found);
// console.log("The grade is " + grade);
// console.log(`My name is ${firstName} ${lastName} `);
console.log("\"Hi! My name is " + fullName + "\"");
var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
    console.log(total);
}
var average = total / reviews.length;
console.log("Review average = " + average);
