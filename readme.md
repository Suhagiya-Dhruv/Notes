### Switch Statement in Java:

A switch statement allows you to select one of many code blocks to be executed based on the value of an expression. It's often used when you have multiple possible cases to handle.

Example:

```java
int day = 3;
String dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    // More cases can be added as needed
    default:
        dayName = "Invalid day";
}

System.out.println("Today is " + dayName);

```

In this example, the switch statement evaluates the value of day, and based on its value (in this case, 3), it assigns the corresponding dayName and prints it.

### For Loop in Java:

A for loop is used to execute a block of code a specified number of times, making it useful for tasks that require iteration.

Example:

```java
for (int i = 1; i <= 5; i++) {
    System.out.println("Iteration " + i);
}
```

This loop will print "Iteration 1" through "Iteration 5" because it starts with i equal to 1, increments it by 1 in each iteration, and stops when i becomes greater than 5.

### While Loop in Java:

A while loop repeatedly executes a block of code as long as a specified condition is true.

Example:

```java
int count = 1;
while (count <= 5) {
    System.out.println("Count is: " + count);
    count++;
}
```

This while loop prints "Count is: 1" through "Count is: 5" because it continues as long as count is less than or equal to 5.

### Do-While Loop in Java:

A do-while loop is similar to a while loop, but it guarantees that the code block is executed at least once before checking the loop condition.

Example:

```java
int num = 1;
do {
    System.out.println("Number is: " + num);
    num++;
} while (num <= 5);
```

This do-while loop prints "Number is: 1" through "Number is: 5" because it executes the code block once, and then it checks the condition.
