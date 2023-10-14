## Scoping

1. Gloable scope
   - The global scope is the outermost scope in JavaScript.
   - Variables declared here are accessible from anywhere in your code.
   - It's often used for global constants or variables that need to be shared across the entire program.
2. Function scope
   - Variables declared inside a function are in the function's scope.
   - These variables are accessible only within that specific function.
   - Function scope helps prevent naming conflicts between different parts of your code.
3. Block scope
   - Introduced with ES6 using let and const.
   - Block scope is created within curly braces {} like in conditional statements or loops.
   - Variables declared with let or const in a block are only accessible within that block.
   - This helps prevent variable leakage and enhances code clarity.

## this keyword

- `this` is a special keyword in JavaScript that refers to an object, and its value depends on how it's invoked:

- If it's called as a method of the global scope, then this refers to window or global object (depending upon browser)

1. Method Call
    - When this is used inside a method of an object, it refers to the object that the method is called on.
    - > For example, myObject.myMethod() will make this point to myObject.

2. Function Call
    - When this is used within a regular function (not a method), it typically refers to the global object (e.g., window in a browser).
    - This can lead to unexpected behavior, especially in event handlers or nested functions.

## Arrow function

- Arrow functions are defined using the `=>` syntax.

```javascript
const add = function (a, b) {
  return a + b;
}; // Normal function

const add = (a, b) => a + b; // arrow function
```
- They're often used for simple, one-liner functions, as they allow you to omit the return keyword for single expressions.

**`this` keyword in arrow funciton**
- Arrow functions do not have their own this context. Instead, they inherit this from the surrounding code (usually the parent function or the global scope).
- This can make them useful for preserving the value of this in situations where it would change in a regular function.