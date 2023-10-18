1. use strict mode
   - Strict mode is a feature in JavaScript that helps catch common coding mistakes and "unsafe" actions. It enforces stricter parsing and error handling.
   - You can enable strict mode by adding `use strict` at the beginning of your script or function.
2. Chaining
   - Chaining is a design pattern that allows you to call methods on an object one after the other, in a single line of code.
   - It's often used with methods that return the object itself, making it easy to perform multiple operations in a sequence.
   ```javascirpt
   obj.method1().method2().method3();
   ```
3. Inheritance
   - Inheritance is a concept where one object can inherit properties and methods from another object. In JavaScript, this is typically done using prototypes.
   - It's a way to create a new object (subclass) based on an existing object (superclass).
4. Constructor function
   - A constructor function is a way to create objects in JavaScript. It is used to initialize objects with properties and methods.
   - Public properties are created within the constructor function using the this keyword. These properties are accessible from outside the object.
   - The prototype is an object that is shared among all instances of a constructor function. It is used to define methods that can be shared across all objects created with the constructor.
5. Call, Apply, bind

   - These are methods available on JavaScript functions that allow you to control how a function is called
   - `call` and `apply` let you invoke a function with a specific this value and arguments. The only difference is in how you pass arguments: `call` uses a comma-separated list, while `apply` uses an array.
   - bind returns a new function with a fixed this value and any predefined arguments. It doesn't execute the function immediately but allows you to execute it later with the fixed context.
