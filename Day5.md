
# Day 5: Conditionals - Map & filter - Doggos Quiz Game

### Conditionals:

Conditions are something or statement let us to execute some code if the condition happens. Conditionals are if statements, if else statements and if else if statements. Here we need to say about "truthiness" in values, for example "strings" are true if I put in condition and same 0 is falsy value, [] is truthy, "" is falsy, null and undefined are falsy... etc. As mentioned before logical operators like &&, || and there is ternary operator => condition ? (do this if true) : (do this if false) . Loops are letting us  to execute line(s) of code multiple times as we want. Loops examples: for (start,condition,++ or --) { ... }, if (item of iterableItems) { ... }.

### Map & Filter:

Filter function allows us to manage the array elements which we need and skip the values we don't want. Here Map function allows us to do something on all items in the array. Also Reduce function allows us to combine items in the array together. In JavaScript we have awesome string shape we can use, called  string template or string literal, we use `string ${variable}` to get the string with needed variables.

### Doggos Quiz Game:

In JavaScript, creating an asynchronous function happen by setting a task to a to-do list by running it in a setTimeout function. Asynchronous refers to code that allows a program to have a task be performed alongside the original task (or tasks) without stopping to wait for the task to complete. Some things that take time from user and JavaScript have to manage:
- Waiting for user events
- Asking a user to pick a file
- Getting permission to access the camera/mic
- Loading data from the interwebs

## Checkpoint Summary :vertical_traffic_light:

Here are the key points covered:

- What is the Condition?
- What is the "truthy" values?
- Logical operators and Ternary operator.
- Loops.
- Map & Filter & Reduce functions.
- String template.
- Asynchronous programming & setTimeout function.
- Where we use Asynchronous programming?

---

## Coding Examples :woman_teacher:

### exercises from the course:
```javascript
    // Write a conditional that logs a message saying whether your first name or last name is longer
    if (firstName.length > lastName.length)
        console.log(firstName, "is longer than", lastName);
    else
        console.log(firstName, "is shorter than", lastName);
    // Write a function isEmpty (array) that returns whether a given array is empty or not
    const isEmpty = (array)  =>  (array.length) ? true : false;
    // Is an empty array truthy or falsy? Write a conditional to find out
```

```javascript
    // Use a for ...of loop to attach an event listener to each button
    // Within the event handler,
    // populate the explanation text in the given element
    // Use another for . ..of loop to disable all the buttons
    for (let btn of optionButtons) {
        btn.addEventListener("click",  (event) => {
            explanation.textContent = fact.explanation;
            
            for (let i = 0; i < optionButtons.length; i++) {
                optionButtons[i].setAttribute("disabled", "");
            }
        });
    }
```

```javascript
    for (let i = 0; i < optionButtons.length; i++) {
    // Within the event handler function,
    // Get the guessed value from the clicked button
    // Use a conditional to compare the guess to the fact's answer
    // and add the "correct"/"incorrect" class as appropriate
        if (isCorrect(optionButtons[i].value)) {
            optionButtons[i].setAttribute("class", "correct");
        } else {
            optionButtons[i].setAttribute("class", "incorrect");
        }
    }
```

```javascript
    const spices = [
        { name: "Emma", nickname: "Baby" },
        { name: "Geri", nickname: "Ginger" },
        { name: "Mel B", nickname: "Scary" },
        { name: "Mel C", nickname: "Sporty" },
        { name: "Victoria", nickname: "Posh" }
    ]
    // From the spices array, use map and filter to:
    // create a new array names with only the name of each girl
    const spicesNames = spices.map((spice) => spice.name);
    // create a new array endInY with just the girls whose nickname ends in "y"
    const endInY = spices.filter(spice => spice.nickName.endsWith("y"));
```

---

## Coding Exercises :man_technologist:

### exercises from the course

```javascript
    // Given an array of possible answers, a correct answer value, and a number of choices to get,
    // return a list of that many choices, including the correct answer and others from the array
    function getMultipleChoices(n, correctAnswer, array) {
        // Use a while loop and the getRandomElement() function
        // Make sure there are no duplicates in the array
        const choices = [];
        choices.push(correctAnswer);
        while (choices.length < n) {
            const randomChoice = getRandomElement(array);
            if (!choices.includes(randomChoice))
                choices.push(randomChoice);
        }
        return shuffleArray(choices);
    }
```

---

### Exercise from freecodecamp.org

### [Ternary Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators)

#### My Solution

```javascript
    function checkSign(num) {
        return (num > 0) ? "positive" : (num !== 0) ? "negative" : "zero";
    }
```

### [Map function](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array)

### My Solution

```javascript
    const ratings = (watchList.map( (movie) => ({title: movie.Title, rating: movie.imdbRating})));
```

### [Filter function](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array)

### My Solution

```javascript
    const filteredList = (watchList.map( (movie) => ({title: movie.Title, rating: movie.imdbRating}))).filter((movie) => movie.rating > 8);
```

### [Golf Code](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code)

```javascript
    function golfScore(par, strokes) {
        let result;
        switch (strokes) {
            case 1:
                result = "Hole-in-one!";
                break;
            case par - 2:
                result = "Eagle";
                break;
            case par - 1:
                result = "Birdie";
                break;
            case par:
                result = "Par";
                break;
            case par + 1:
                result = "Bogey";
                break;
            case par + 2:
                result = "Double Bogey";
                break;
            default:
                if (strokes < par - 2)
                    result = "Eagle";
                else
                    result = "Go Home!";
        }
    }
```

---

### Doggos Quiz Game

[Day5DoggosQuizGame](./DoggosQuizGame/DoggoFetch.html)

### Sources to review
- #### [MDN](https://developer.mozilla.org/)
- #### [Free code camp](https://www.freecodecamp.org/)