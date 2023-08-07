
# Day 1: Introduction & DOM

This README file summarizes the JavaScript introduction lessons. This section of the sprint view the DOM representation and how can I use it to interact with it using JavaScript functions with CSS selector expressions in console and modify the DOM viewed. The DOM edits I made in the current page will be lost if I reload the page, that is because this edits is on my side and the source code in the link I requested is not modified.

## Checkpoint Summary :vertical_traffic_light:

In the overview introduction, we explored some flashes in JavaScript history. Here are the key points covered:

- Snippets from JavaScript history.
- What is the JavaScript?
- What we can do with JavaScript?
- Where is JavaScript runs.
- How DOM represents?
- Interact with JavaScript & DOM

---

## Coding Examples

### Snippet of selectors applied with JavaScript
```javascript
    1. console.log("Hi, it's console!!");           // print on console
    2. document.getElementById('id');               // return element that matches the id selector
    3. document.querySelector('anySelector');       // return first element that matches any selector provided
    4. document.querySelectorAll('anySelector');    // return all elements that match any selector provided as NodeList
    5. document.getElementsByTagName('tag');        // return all elements that match the tag name provided as HTMLCollection
    6. document.getElementsByClassName('class');    // return all elements that has the class name provided as HTMLCollection
    7. document.getElementsByName('code');          // return all elements that match the attribute name provided as HTMLCollection
```

### Snippet of DOM modifications
```javascript
    document.title = "My NEW Title";
    document.getElementById('player').textContent = "Rob";
    document.getElementById('player').append(' & Mosh');

```

---

## Coding Exercises

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

### [Several line string concatenation](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator)

### My Solution

```javascript
    let myStr = "This is the first sentence.";
    myStr += " This is the second sentence.";
```

### [Use Dot Notation to Access the Properties of an Object](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-dot-notation-to-access-the-properties-of-an-object)

### My Solution

```javascript
    console.log(`${dog.name}\n${dog.numLegs}`);
```

### Sources to review
#### [MDN](https://developer.mozilla.org/)
#### [FreeCodeCamp] (https://www.freecodecamp.org/)