
# Day 1: Arrays - Objects

### Arrays :

Arrays let us keep multiple values together in a single collection. We can use length to count elements in array, we can reach each element individually by using the [] with index[^1]. We can also use functions with array like include, pop (returns the element popped), push (returns the new length after push) and more. Arrays can have multiple data with different types.
Mutable is a data type that can be edited (eg. array). Immutable is a data type that can't be edited (eg. strings and other primitives). If we use concat function with array, it will create a new array with new values concated together. The push function manipulates "mutate" the array while concat function not manipulates the array. The const immutable and the let mutable. The array itself is immutable and the data in it are mutable.
> Always use const (i.e immutable) unless you have a reason to use let (mutable).
[^1]: arrays are zero indexed.

### Objects :


## Checkpoint Summary :vertical_traffic_light:

Here are the key points covered:

- What is the Array?
- Mutable vs Immutable.
- Which data types are mutable? and Which immutable?

---

## Coding Examples :woman_teacher:

### Snippet of selectors applied with JavaScript :
```javascript
    // What do you think each of these does? (Try it!)
    ["c", "a", "d", "b"].sort();                        // [ "a", "b", "c", "d" ]
    ["lions", "tigers", "bears oh my!"].join(" & ");    // "lions & tigers & bears oh my!"
    [1, 2, 3].concat([4, 5, 6]);                        // [ 1, 2, 3, 4, 5, 6 ]
```

### Snippet of DOM modifications :

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

```javascript
    // Use arithmetic operators to compute:
    // The total number of siblings of parents
    console.log(5+4);
    // The average number of hours you been slept this week
    console.log((4.5+6+6+7+6+7.5+6) / 7);
    // The number of dogs you'd pet in a week if you pet 1 dog pet hour while awake
    console.log((4.5+6+6+7+6+7.5+6) - 24 * 7 * 1);
```

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

## Coding Exercises :man_technologist:

### exercises from the course

```javascript
    // Type commands to retrieve:
    // 1. all the p elements
    document.getElementsByTagName('p');

    // 2. the text X
    document.getElementById('p1-symbol').textContent;

    // 3. the number of squares in the board
    document.querySelectorAll('.square').length;

    // 4. the number of "A game you know"
    document.querySelector('h2').textContent;
```

```javascript
    // 1. Change the player names to you & neighbor
    document.querySelector('#p1').textContent = 'Moath';
    document.querySelector('#p2').textContent = 'Ayman';

    // 2. Swap the player symbols
    document.querySelector('#p1-symbol').textContent = 'O';
    document.querySelector('#p1-symbol').textContent = 'X';

    // 3. Change subtitle to "A game you know and love"
    document.querySelector('h2').textContent += " and love";
```

---

### Exercise from freecodecamp.org

### [The *= operator multiplier](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication)

#### My Solution

```javascript
    a *= 5;
    b *= 3;
    c *= 10;
```

---

### Sources to review
- #### [MDN](https://developer.mozilla.org/)
- #### [Free code camp](https://www.freecodecamp.org/)