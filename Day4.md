
# Day 4: Quiz Project Functions - Events & Handlers

### Quiz Project Functions:

Functions consists of three parts, name - parameters - return value - doing statements. In JavaScript contains : values => things, variables => point to things, functions => doing things. In JavaScript we can declare(create) functions and call(use) them. We named the functions parameters like the variables.
1 + undefined = Nan and tpypeof NaN is "number" :). If I pass a parameters to the function doesn't have parameters then JavaScript doesn't carte and doing what it usually does (in general if passed less than wanted). If the function doesn't finish his work we don't have to put return before the function finishes his work. We can declare functions in deferent ways, we can use function key word (anonymous), we can declare variable pointed to a function or using arrow function type.
In JavaScript we have multiple scopes; global scope, function scope, lexical scope and block scope.
EventListeners are used to listen for events that user do and handle it. We use addEventListener() to add listeners. The events can be like : "click", "mouseover", "mouseout" and more, these are the first parameter for event listener and the second is the action (function), so we use addEventListener handle the events happening and we van use multiple listeners to the same element.
> Scope determines where variables are "in play".

## Checkpoint Summary :vertical_traffic_light:

Here are the key points covered:

- What is the Function?
- What is the types of Functions?
- Unusual things happen in JavaScript.
- Where we put the Function returned value?
- How can we declare a Function?
- What is scope in JavaScript? And what is block scope in JavaScript (let vs var)?
- How to interact with webpage? What is EventListener?

---

## Coding Exercises :man_technologist:

### exercises from the course

```javascript
    // In the console, declare the following functions:
    // multiply: given two numbers, return their product
    const multiply = (x, y) => x * y;
    multiply(3,4);
    // yell: given a lowercase string, log it in all caps to the console
    const log = (string) => console.log(string.toLowerCase());
    // longerThan: given 2 arrays, log whether the first is longer than second
    const longerThan = (array1, array2) => array1.length > array2.length;
```

```javascript
    // In the console, declare the following functions using arrow functions:
    // divide: given 2 numbers, return the first divided by the second
    const divide = (first, second) => first / second;
    // whisper: given an uppercase string, log it in all lowercase to the console
    const whisper = (string) => console.log(string.toLoweCase());
    // shorterThan: given 2 arrays, return whether the first is shorter than the second
    const shorterThan = (array1, array2) => array1.length < array2.length;
```

```javascript
    // In the console, on our quiz add event listeners to:
    // Capitalize the text of the "true" button when it is clicked
    const trueBtn = document.querySelector("#options button");
    trueBtn.addEventListener("click", (event) => trueBtn.textContent = trueBtn.textContent.toUpperCase());

    // Change the h1 text to "hovering" when the mouse moves into the element
    const headerElement = document.querySelector("header h1");
    headerElement.addEventListener("mouseover", (event) => trueBtn.textContent = "hovering");

    // Change the h1 text to "Quiz.js" when the mouse moves out of the element
    headerElement.addEventListener("mouseout", (event) => trueBtn.textContent = "Quiz.js")
```

---

### Exercise from freecodecamp.org

### [Global Scope and Functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions)

#### My Solution

```javascript
    const myGlobal = 10;

    function fun1() {
        oopsGlobal = myGlobal/2;
    }
```

### [Local Scope and Functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions)

#### My Solution

```javascript
    function myLocalScope() {
        const myVar = "test";
        console.log('inside myLocalScope', myVar); // "test"
    }
    myLocalScope();
    console.log('outside myLocalScope', myVar); // undefined
```

### [Global Scope vs Local  Scope](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions)

#### My Solution

```javascript
    const outerWear = "T-Shirt";
    function myOutfit() {
        let outerWear = "sweater";
        return outerWear;
    }
    myOutfit();
```

### [Queue - Stand in Line](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line)

#### My Solution

```javascript
    function nextInLine(arr, item) {
        arr.push(item);
        return arr.shift();
    }
    console.log(nextInLine([1,2.3,4,5], 6));
```

---

### Quiz project

[Day4QuizProject](./QuizProject/Quiz.html)

### Sources to review
- #### [MDN](https://developer.mozilla.org/)
- #### [Free code camp](https://www.freecodecamp.org/)