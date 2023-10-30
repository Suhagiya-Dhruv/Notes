### 1. `Object`

In JavaScript, `Object.keys()` and `Object.values()` are methods that allow you to extract information from objects. They are commonly used when working with objects and provide different ways of accessing the properties and values within an object.

1. **`Object.keys(obj)`**:
   - The `Object.keys()` method returns an array containing the keys (property names) of an object.
   - This method extracts only the property names and ignores their corresponding values.

   Example:
   ```javascript
   const person = { name: 'John', age: 30, city: 'New York' };
   const keys = Object.keys(person);
   console.log(keys); // Output: ['name', 'age', 'city']
   ```

2. **`Object.values(obj)`**:
   - The `Object.values()` method returns an array containing the values of an object's properties.
   - This method extracts the values of the properties but doesn't include the property names.

   Example:
   ```javascript
   const person = { name: 'John', age: 30, city: 'New York' };
   const values = Object.values(person);
   console.log(values); // Output: ['John', 30, 'New York']
   ```

These methods are helpful when you need to iterate over the properties of an object, perform operations on the property names or values, or convert an object's properties into an array for further processing. They are often used in conjunction with iteration methods like `forEach`, `map`, or `for...of` to process the keys or values of an object.

### 2. `setTimeout` vs `setInterval`

JavaScript provides two functions for scheduling the execution of code after a delay:

- `setTimeout`: Executes a function or a piece of code after a specified delay (in milliseconds) and only once.

- `setInterval`: Repeatedly executes a function or code at a specified interval (in milliseconds) until it is canceled.

#### Examples:

##### Using `setTimeout`:

```javascript
console.log('Starting...');
setTimeout(() => {
  console.log('This message will appear once after 2 seconds.');
}, 2000);
```

##### Using `setInterval`:

```javascript
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`This message will appear every second (${count}s).`);
  if (count === 5) {
    clearInterval(intervalId); // Stops the interval after 5 seconds.
  }
}, 1000);
```

### 3. Promises

Promises in JavaScript are used to handle asynchronous operations more effectively. They provide a way to work with asynchronous code in a more readable and maintainable manner, allowing you to represent a value that might not be available yet.

A Promise can be in one of three states:
- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled**: The asynchronous operation completed successfully, and the Promise has a result.
- **Rejected**: The asynchronous operation encountered an error, and the Promise has a reason for failure.

#### Example:

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Async data fetched!';
      if (data) {
        resolve(data); // Promise is fulfilled with data.
      } else {
        reject('Error: Data not available.'); // Promise is rejected with an error.
      }
    }, 2000);
  });
};

fetchData()
  .then(result => {
    console.log(result); // "Async data fetched!"
  })
  .catch(error => {
    console.error(error); // "Error: Data not available."
  });
```

Promises are crucial for managing and chaining asynchronous operations, improving code readability, and handling errors in a structured way.

Understanding when to use `setTimeout` or `setInterval` and how to work with Promises is essential for dealing with asynchronous programming and managing delays and asynchronous operations effectively in JavaScript.