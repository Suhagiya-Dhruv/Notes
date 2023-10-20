1. Inheritance
   - Inheritance is a concept where one object can inherit properties and methods from another object. In JavaScript, this is typically done using prototypes.
   - It's a way to create a new object (subclass) based on an existing object (superclass).
2. Constructor function
   - A constructor function is a way to create objects in JavaScript. It is used to initialize objects with properties and methods.
   - Public properties are created within the constructor function using the this keyword. These properties are accessible from outside the object.
   - The prototype is an object that is shared among all instances of a constructor function. It is used to define methods that can be shared across all objects created with the constructor.
3. Call, Apply, bind

   - These are methods available on JavaScript functions that allow you to control how a function is called
   - `call` and `apply` let you invoke a function with a specific this value and arguments. The only difference is in how you pass arguments: `call` uses a comma-separated list, while `apply` uses an array.
   - bind returns a new function with a fixed this value and any predefined arguments. It doesn't execute the function immediately but allows you to execute it later with the fixed context.


   function.call(obj,arg1,arg2);
   function.bind(obj,arg1,arg2);
   function.apply(obj,[arg1,arg2]);


4. Rest Operator (`...`):
   - The rest operator, denoted by three dots (`...`), allows you to collect the remaining elements of an array or function arguments into a single variable.
   - It's often used in function parameter definitions to capture any additional arguments that were not explicitly named.
   - Here's an example of using the rest operator with function parameters:

   ```javascript
   function run(a1,a2...numbers) {
      console.log(a1,a2, numbers); // Outputs 1, 2, [3,4]
   }

   run(1, 2, 3, 4)

   ```

5. Spread Operator (`...`):
   - The spread operator, also denoted by three dots (`...`), is used to spread elements of an array or object into another array or object.
   - It is commonly used for creating a shallow copy of an array or combining multiple arrays into one.

   Here are some examples:

   ```javascript
   const arr1 = [1, 2, 3];
   console.log(...arr1); // Outputs 1, 2, 3
   ```