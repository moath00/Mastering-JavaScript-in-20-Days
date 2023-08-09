
# Day 1: Values & Data Types - Operators - Expressions

### Values and Data Types :

This README file summarizes the JavaScript data types lessons. This section of the sprint view the various types of data used in JavaScript and what values accepted such as strings, integers, arrays ...etc. JavaScript has primitives and objects. Then here is the deferent between undefined and null, undefined means nothing but mistake happened (like I want something and it's not exist) and null means nothing but I want it to be nothing (like I want something and it's exist nothing).

Let's talk about string, first it's a group of character, then it's represented by 0 indexed representation. I can interact with string with square practice [] and other functions like indexOf() [^1], includes() [^2], toLowerCase() and more functions.

[^1]: indexOf() returns the index of the first character found in the string and its case-sensitive and return -1 if not found the character or substrings.
[^2]: includes() returns boolean true if the substring exists in the string and its case-sensitive.

### Operators :

("+" for contaminate and typeof: considered operator)
mathematical operators : { +, -, *, / } with order of () then { * and / } then { + and  - }, { ++, -- } are increment and decrement operators.
comparison operators : { >, <, >=, <= } they are widely used in condition statements.
equals operators : { ==, !=, ===, !== }, double equality is for comparing the values and triple comparing values and types.
logical operators : { ||, &&, ??, ^, |, &, <<, >>> } operators that make binary operations.

### Expressions :

An expression is a block of code that evaluates to a value. A statement is any block of code that is performing some action.
The distinction between an expression and a statement is important because an expression is a subset of a statement. You can use an expression wherever a statement is expected, but this does not work vice versa.
The let keyword declaring the variable like : let message = "Hello, world!"; and if I didn't use = (that means I didn't assign the variable) and it's value is undefined.
The const keyword declaring the variable like : const myName = "Moath"; and will remember the value forever :skull:.
The variable is pointer or reference, it is contained the position of the variable in the memory.
The valid variables names are allow to use camel-case, kebab-case and more but not allow to use number at the beginning and some special characters like => !
The expression is to ask JavaScript about something, the statement is to ask JavaScript to do something.
Expressions example : 10 + 1 * 2, statements example : let sum = 10 + 1 * 2 .

## Checkpoint Summary :vertical_traffic_light:

Here are the key points covered:

- What is data types and its values?
- What is the JavaScript kinds of data?
- What is the deferent between Undefined and NULL JavaScript?
- What is the String? How to work with String?
- What is operators? What they do? What are the operator types?
-  What is the variables?
- Declaring a variable.
- How to declaring and assigning forever?
- What is the deferent between statement and expression?

---

## Coding Exercises from the course :man_technologist: 

### Snippet of types of JavaScript :
```javascript
    // Which data type is each of these values?
    typeof false                    // boolean
    typeof "true"                   // string
    typeof document.title           // string
    typeof "some string".length     // number
    typeof null                     // object
```

### Snippet of DOM exercises :

```javascript
    // Add your last name in the players listing
    document.getElementById("firstPlayer").textContent.append(" Hjjawi");
    document.getElementById("secondPlayer").textContent += " Hjjawi";
    // Retrieve the first "T" in the page title
    document.title[document.title.indexOf("T")];
    // Answer whether the page title contains the string "JavaScript"
    document.title.includes("JavaScript");
    // Capitalize the heading "Tic Tac Toe"
    document.getElementsByTagName("h1").textContent = document.getElementsByTagName("h1").textContent.toUpperCase();
```

### Snippet of operators exercises :

```javascript
    // Use arithmetic operators to compute:
    // The total number of siblings of parents
    console.log(5+4);
    // The average number of hours you been slept this week
    console.log((4.5+6+6+7+6+7.5+6) / 7);
    // The number of dogs you'd pet in a week if you pet 1 dog pet hour while awake
    console.log((4.5+6+6+7+6+7.5+6) - 24 * 7 * 1);
```

### Snippet of variables exercises :

```javascript
    // Declare & assign variables to remember :
    // Your name
    const myName = "Moath Hjjawi";
    // The combined age of your parents
    let combinedMyParentsAge = 40 + 35;
    // The #board element on the page
    let board = document.querySelector("#board");
```

---

### Sources to review
- #### [MDN](https://developer.mozilla.org/)
- #### [Free code camp](https://www.freecodecamp.org/)