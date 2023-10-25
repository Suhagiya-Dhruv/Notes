### 1. Closures

In JavaScript, a closure is a function that has access to the variables and parameters of its outer (enclosing) function, even after that outer function has completed execution. Closures are a powerful and fundamental concept in JavaScript.

#### Example:

```javascript
function outer() {
  const outerVar = 'I am from the outer function';

  function inner() {
    console.log(outerVar); // Accesses outerVar from the outer function
  }

  return inner;
}

const innerFn = outer();
innerFn(); // Logs "I am from the outer function"
```

### 2. Truthy Value vs. Falsy Value

In JavaScript, values are evaluated as either "truthy" or "falsy" when used in conditions. Understanding these concepts is crucial when writing conditional statements.

- **Truthy Values**: Values that are considered true when evaluated in a Boolean context. Examples include `true`, non-empty strings, numbers other than `0`, objects, arrays, and functions.

- **Falsy Values**: Values that are considered false when evaluated in a Boolean context. Examples include `false`, `0`, `null`, `undefined`, `NaN`, and empty strings.

#### Example:

```javascript
const truthyValue = 'Hello';
const falsyValue = 0;

if (truthyValue) {
  console.log('Truthy value is true');
}

if (!falsyValue) {
  console.log('Falsy value is false');
}
```

### 3. `==` vs. `===`

In JavaScript, both `==` (loose equality) and `===` (strict equality) are used to compare values. However, they behave differently:

- `==` checks for equality after performing type coercion, which can lead to unexpected results.
- `===` checks for strict equality without type coercion.

#### Example:

```javascript
const num = 5;
const str = '5';

console.log(num == str);  // true (coerced equality)
console.log(num === str); // false (strict equality)
```

### 4. Object Methods: `preventExtensions`, `seal`, and `freeze`

JavaScript provides methods to control the mutability and properties of objects.

- `Object.preventExtensions(obj)`: Prevents the addition of new properties to an object but allows modifying or deleting existing properties.

- `Object.seal(obj)`: Prevents the addition of new properties and makes all existing properties non-configurable. You can still modify existing values.

- `Object.freeze(obj)`: Prevents adding, modifying, or deleting properties. It also makes all properties non-writable and non-configurable.

#### Example:

```javascript
const person = { name: 'John', age: 30 };

Object.preventExtensions(person);
person.city = 'New York'; // Won't add 'city' property

Object.seal(person);
person.city = "New York"; // Won't add 'city' property
delete person.age; // Won't delete 'age' property

Object.freeze(person);
person.city = "New York"; // Won't add 'city' property
person.name = 'Jane'; // Won't change 'name' property
delete person.age; // Won't delete 'age' property
```