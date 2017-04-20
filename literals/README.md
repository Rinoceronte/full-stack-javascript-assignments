# Literals

> What are the purpose of literals?  How are they different form and instance?

## Requirements

1. Create an object literal person
    ```js
      export let person = { name: 'Bob', age: 42};
    ```
2. Create a string literal song with the value:
    ```js
    export let song = 'Twinkle, Twinkle, little star';
    ```
3. Create a numberic variable meaningOfLife:
    ```js
    export let meaningOfLife = 42;
    ```

### Observations

1. What is a literal?
    *a notation for representing a fixed value in source code.
2. Say we had a person object defined above--what happens if we need another object?
    1. What can we do to fix this?
        *we can create a new object, but it would be assigned to a different variable. so in this instance let * = new person('Sam', 30);
        To fix this we can also create this as an array of objects.
