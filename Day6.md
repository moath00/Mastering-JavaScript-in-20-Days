
# Day 6: Data Fetching & Promises - Destructuring Data - Async - Modules

### Data Fetching & Promises:

API: Application Programming Interfaces.APIs provide URLs that point at data we care about. API have multiple endpoints and the link I have is one of those endpoints. To use API with fetch function. Fetch is API method to reach data from the server, it returns a promise response and promise means that this is something that takes time to execute(takes time to fetch data from network). Promises can be in 3 possible states:
- pending: still waiting for data to be fetched.
- fulfilled: resolved the fetching request and all done.
- rejected: rejected the fetching request (and all done).
We use await with Promise to wait for data to be fetched before running the rest of the code, this will return the response as object, we can use .json function to return the response as JSON object and more readable format and we must use it with await too but we must use it with async functions. With promise we can use then(callbackFun) function to wait for data to be fetched then execute some code on it before running the rest of the code.

> Nice service for http status (GIFs): https://http.cat :)

### Destructuring Data:

Destructuring is a fancy way of declaring multiple variables at once by "extracting" values from an object with their property names and we can take only the property(s) we want, here the order is not important, anyway JavaScript will match the properties if object contains, but if not; it will take the properties by order, in the same time we can ignore any value we don't want. We can use ... to store rest of data (properties).

### Async:

The async function declaration creates a binding of a new async function to a given name. For example, we must use json function with await too but we must use await with async functions.

### Modules:

Modules let us split big codebases across multiple files. Top-level await: At the end of our doggo program we had to use await outside of a function. This isn't usually possible in JS. Module scope: another difference is that modules create their own scope. Export keyword lets us expose variables from our module's scope to the outside world. Import keyword lets us use an exposed variable from another module. **Debugging** is a way to figure out what is going wrong and catch it. We can debugging in IDE and in browser console debugger. Usually errors will cause JS to stop running our code. Sometimes I want JS to do that but sometimes we want to handle this error, so we use try { ... } catch (e) { ... } .

## Checkpoint Summary :vertical_traffic_light:

Here are the key points covered:

- What is the API?
- What is the "truthy" values?
- Logical operators and Ternary operator.
- Loops.
- Map & Filter & Reduce functions.
- String template.
- Asynchronous programming & setTimeout function.
- Where we use Asynchronous programming?
- What is the Promise?
- What is the Module? How do we use the Module?
- What is the Debugging?
- Handling errors.

---

## Coding Examples :woman_teacher:

### exercises from the course:
```javascript
    // Given a URL such as "https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg"
    // return the breed name string as formatted in the breed list, e.g. "standard poodle"
    function getBreedFromURL(url) {
        // The string method .split(char) may come in handy
        // Try to use destructuring as much as you can
        let splitURL = url.split("/")[4];
        let [breed, subbreed] = splitURL.split("-");
        return [subbreed, subbreed].join(" ").trim();
    }
    getBreedFromURL("https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg");
```

```javascript
    // Given a URL, fetch the resource at that URL, 
    // then parse the response as a JSON object,
    // finally return the "message" property of its body
    async function fetchMessage(url) {
        const response = await fetch(url);
        const body = await response.json();
        const { message } = body;
        return message;
    }
```

```javascript
    // For each of the choices in choicesArray,
    // Create a button element whose name, value, and textContent properties are the value of that
    // choice, attach a "click" event listener with the buttonHandler function,
    // and append the button as a child of the options element
    for (const choice of choicesArray) {
        const button = document.createElement("button");
        button.setAttribute("textContent", choice);
        button.setAttribute("value", choice);
        button.setAttribute("name", choice);
        button.addEventListener("click", buttonHandler);
        options.appendChild(button);
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

## Course Project :man_technologist:

[Rick and Morty](./Rick&Morty/index.html)

---

### Doggos Quiz Game

[Day5DoggosQuizGame](./DoggosQuizGame/DoggoFetch.html)

### Sources to review
- #### [MDN](https://developer.mozilla.org/)
- #### [Free code camp](https://www.freecodecamp.org/)