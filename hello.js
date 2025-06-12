// Write a program that prints "Hello, World!" to the console 
console.log(greet("Prabesh Shah")); // Checking the function with a name"
console.log("Hello, World!");
name = "John Doe";
const p = 10;
console.log(name);
console.log(p);
// Write a program that takes a number as input and prints its square to the console.
let messge = "Prabhat";//string 
let number = 10;//number 
let is_active = true;//boolean
let fruits = ["apple", "banana", "orange"];//array (List of items)
let person = { name: "John", age: 30, city: "New York" };//object (key value pair)
console.log(messge);
console.log(number * number); // prints the square of the number
console.log(is_active);
console.log(fruits);
console.log(person);
// Write a program that takes two numbers as input and prints their sum to the console.
let num1 = 5;
let num2 = 10;
let sum = num1 + num2;
console.log(sum);// prints the sum of the two numbers
//function: A function is a block of code that does something when you call it.
//Normal function
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // prints "Hello, Alice!"
//Arrow function
const respectedGreet = (name) => "Helllo " + name;
console.log(respectedGreet("rocky")); // prints "Hello, rocky!"
//add function
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // prints 15
// Conditonal statement
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
// Looping statement for Loops
// i starts at 0, increases by 1 each time (i++)
for (let i = 0; i < 10; i++) {
    // i is the current number, i++ means add 1 to i after each loop
    console.log(i);
}
// while Loops 
let j = 1;
while (j < 101) {
    console.log(j);
    j++;
}
//Array Integartions (workiong with Lists)
let color = ["red", "green", "blue"];
color.forEach(function (color) {//for printing the data in the List
    console.log(color);
});
//using for map(retuens a new array)
let upper = color.map(function (color) {
    return color.toUpperCase();
}
); console.log(upper); // prints ["RED", "GREEN", "BLUE"]
