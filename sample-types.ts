
export {}
let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "Anup";
let lastName: string = "Kumar";
let fullName = firstName   +  lastName;
// console.log(found);
// console.log("The grade is " + grade);
// console.log(`My name is ${firstName} ${lastName} `);
console.log(`"Hi! My name is ${ fullName}"`);
let reviews: number [] = [5,5,4.5,1,3];
let total: number = 0;
for (let i = 0; i < reviews.length; i++){

console.log(reviews[i]);
total += reviews[i];
console.log(total);
}
let average: number = total/reviews.length;
console.log("Review average = " + average); 