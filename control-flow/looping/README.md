# Looping

> What is looping good for? Why would we use a loop? When would we?

*looping is good for when we need to iterate over any type of array of objects with the same requirements for each.

## Requirements

1. Create a for loop that starts at 0 and ends at 10.  Each number should be output in the console.
2. In the index.js file paste the following code:
    ```js
      const people = ['Bob', 'Billy', 'Aaron', 'Jimmy', 'Gerald'];
      people.forEach(p => console.log(p));

      for(let p of people) {
        console.log(p);
      }
    ```

    1. Run the code (assuming your in the directory in the terminal) ``` node .```
    2. What happens for each piece of code? The same thing happens for each outputting the name.
3. In the index.js file paste the following code:
    ```js
    const person = { name: 'Bob', age: 25, isHappy: true };

    for(let p in person) {
      console.log(p);
    }
    ```
    1. What is the difference? This will output each of the types: age, name and isHappy
4. In the index.js file paste the following code:
    ```js
    let number = 0;
    while(number < 10) {
      console.log(number);
      number++;
    }
    ```
    1. What did you observe?
    this outputs each number then increments by one.
    2. What is the difference between a for and a while loop? a while loop happens while a condition is true a for loop is designed to iterate over objects and so therefor needs a requirement of iteration.

## Observations

1. Explain the differences between for, foreach, and for of loops
  *for loop requires 3 sections for iteration. for of will assign the variable to an iterable and loop through that iterable. foreach just straight up iterates over an iterable.
2. When would you use a while loop?
  *I would use a while loop while trying to reach a condition, with an undetermined amount of attempts to reach that condition.
3. What's the difference between the ```while``` and ```do while``` loop?
  *A while loop tests the condition before the first run, do while will run at least once then test the condition each time after.


## Resources

* (Loops and interations)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration]