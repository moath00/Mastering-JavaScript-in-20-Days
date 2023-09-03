
# Day 7: Introduction - JavaScript Principles - Functions & Callbacks

### Introduction:

JavaScript the Hard Parts will cover: JavaScript principles, Callbacks & Higher Order functions, Closure, Classes/Prototypes & Asynchronous.
What to focus on in the workshop:
- Analytical problem solving
- Technical communication
- Engineering approach
- Non-technical communication
- JavaScript and programming experience

### JavaScript Principles:

When JavaScript code runs, it:
- Goes through the code line-by-line and runs/ 'executes' each line - known as the **thread of execution**
- Saves 'data' like strings and arrays so we can use that data later - in its **memory**. We can even save code (functions')
So, we can store variables and functions in Memory, so we can easily access them in JavaScript, and then we call it a global memory. In the function we store variables (and maybe functions) in Memory too, so we can access them in the function, and then we call it a local memory. First thing we store in the local memory is the parameter and its argument (value). Then we can store the variables with its value have.
#### Call Stack:
- JavaScript keeps track of what function is currently running (where’s the thread of execution)
- Run a function - add to call stack
- Finish running the function - JS removes it from call stack and back to global
- Whatever is top of the call stack that’s the function we’re currently running

### Functions and Callbacks:

**DRY :  Don't Repeat Yourself**, so we can generalize the function to make it more reusable. We add parameters to the function and provide the arguments, higher order functions not only generalized with parameters, but also with function parameters. In higher order functions[^1], we may not want to decide exactly what some of our functionality is until we run our function. Here we use call stack while we executing code. In JavaScript, functions are what's called first class objects, they have all the feature that the objects have. The outer function that takes in a function, is higher-order function. Takes in a function or passes out a function (any function that do that we call HOF). The function we insert is our callback function. Callbacks and Higher Order Functions simplify our code and keep it DRY.
- Declarative readable code: Map, filter, reduce - the most readable way to write code to work with data.
- Codesmith & pro interview prep: One of the most popular topics to test in interview both for Codesmith and mid/senior level job interviews.
- Asynchronous JavaScript: Callbacks are a core aspect of async JavaScript, and are under-the-hood of promises, async/await.
We can write the functions in new form provided in ES6 called arrow function: **const fun = (input) => { // code and return value };**. This can reduce if we have only parameter and if we have only return statement, **const fun = input => returnedValueWithoutReturnKeyword;** and will call anonymous function. Anonymous and arrow functions improve immediate legibility of the code.

[^1]: "higher-order function" is a function that accepts functions as parameters and/or returns a function.

## Checkpoint Summary :vertical_traffic_light:

In the overview introduction here are the key points covered:

- What happened when JavaScript code runs?
- Functions and Execution context.
- What is call stack? How it work?
- Why do we even have functions?
- Higher Order and callback functions.
- What is the arrow function, anonymous function?

---

### Exercise from freecodecamp.org

### [Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem)

#### My Solution

```javascript
    const squareList = arr => {
        arr = arr.filter( item => item>0 && item%1==0);
        const squared = arr.map( ele => ele**2);
        return squared;
    };
```

### [Apply Functional Programming to Convert Strings to URL Slugs](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs)

### My Solution

```javascript
    function urlSlug(title) {
        let titleWords = title.toLowerCase().split(" ").filter( item => item );
        titleWords = titleWords.reduce( (preWord, word) => (preWord === "") ? preWord + word : preWord + "-" + word, "");
        return titleWords;
    }
```

### Q1: Functions and Callbacks
Implement a JavaScript function called mapAsync that takes an array and a callback function. The function should map each element of the array to a new value using the callback function asynchronously.

The final result should be returned as a Promise.

```javascript
    const mapAsync = async (array, callback) => {
        const asyncedResult = [];
        for (let i = 0; i < array.length; i++) {
            const element = await callback(array[i]);
            asyncedResult.push(element);
        }
        return asyncedResult;
    }
    console.log(mapAsync([1, 3, 5], item => item + "$"));
```

### Q2: Call Stack and Recursion
Write a JavaScript function called sumRange that calculates the sum of all integers in a given range. The function should use recursion to handle the calculation and demonstrate understanding of the call stack.

```javascript
    const sumRange = (array) => {
        if (array.length  === 1)
            return array.pop();
        else {
            
            return array.pop() + sumRange(array);
        }
    }

    console.log(sumRange([1,2,3,4,5]));
```

---

### Sources to review
- #### [MDN](https://developer.mozilla.org/)
- #### [Free code camp](https://www.freecodecamp.org/)