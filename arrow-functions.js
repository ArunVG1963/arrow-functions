/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addtwoNumbers1( a, b) {
    return a+b;
}

let sum=addtwoNumbers1(3,5);
console.log(sum);
// Arrow Function With Parameters
const addtwoNumbers2 = ( a, b) => {
    return a+b;
}

sum=addtwoNumbers2(6,7);
console.log(sum);

// Single Line Arrow Function With Parameters
const addtwoNumbers3 = ( a, b) => (a+b);
sum=addtwoNumbers3(10,21); console.log(sum);
// Implicit Returns
const saySomething = message  => console.log(message);
saySomething("Hello World");

const sayHello = () => console.log("hello");
sayHello();
// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
</p>`
)
console.log(returnMultipleLines());