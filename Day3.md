
# Day 1: Arrays - Objects

### Arrays :

Arrays let us keep multiple values together in a single collection. We can use length to count elements in array, we can reach each element individually by using the [] with index[^1]. We can also use functions with array like include, pop (returns the element popped), push (returns the new length after push) and more. Arrays can have multiple data with different types.
Mutable is a data type that can be edited (eg. array). Immutable is a data type that can't be edited (eg. strings and other primitives). If we use concat function with array, it will create a new array with new values concated together. The push function manipulates "mutate" the array while concat function not manipulates the array. The const immutable and the let mutable. The array itself is immutable and the data in it are mutable.
[^1]: arrays are zero indexed.
> Always use const (i.e immutable) unless you have a reason to use let (mutable).

### Objects :

Objects collect multiple values together to describe more complex data. We can access the data using dot notation and we can use the object properties, so we can consider the objects as mutable data types. We can also called arrays as objects because it's went through being object under the hood and its type using typeof give object, I can also use (object.freeze()) to make it immutable[^2].
[^2]: search in MDN for more. Object can contain multiple properties also can contain values, objects or functions that in this case will call object methods.
There are several built-in objects and functions like document object and its methods, arrays and its methods, console and its methods, Math object and its methods and more. How about strings? It's immutable but have functions seems like manipulate the string but it's not, it's returned new string, that is because JavaScript automatically wrap it to String Object.

> This how comments looks like in JS : // comment :)

## Checkpoint Summary :vertical_traffic_light:

Here are the key points covered:

- What is the Array?
- Mutable vs Immutable.
- Which data types are mutable? and Which immutable?
- What is the Object?
- How to interact with Objects?
- learn some built-in Objects.
- How to write a comment in JavaScript?

---

## Coding Exercises :man_technologist:

### exercises from the course

```javascript
    // Create an object representing you!
    const me = {
        name : "Moath",
        home : "Tulkarm",
        languages : [ "Arabic", "English" ],
        status : "Single Happy Young",
        education : "Bachelor",
        vehicle : null,
        hobbies : [ "Coding", "Reading", "Traveling" ]
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

    const spiceGirls = {
        albums : [ "Spice", "Spiceworld", "Forever" ],
        motto : "Girl Power",
        members : spices
    }

    // From the spiceGirls object, how can we retrieve:
    // "Girl Power"
    let motto = spiceGirls.motto;
    // The object representing Ginger Spice
    let ginger = spiceGirls.members[1];
    // "Spiceworld"
    let spiceAlbum = spiceGirls.album[1];
    // "Victoria"
    let victoria = spiceGirls.members[4].name;
```

---

### Exercise from freecodecamp.org

### [The slice function](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice)

#### My Solution

```javascript
    function forecast(arr) {
        arr = arr.slice(2,4);
        return arr;
    }
```

### [The spread operator ...](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator)

#### My Solution

```javascript
    function spreadOut() {
        let fragment = ['to', 'code'];
        const sentence = [ 'learning', ...fragment, 'is', 'fun' ];
        return sentence;
    }
```

### [Profile lookup - Object](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup)

#### My Solution

```javascript
    function lookUpProfile(name, prop) {
        // Only change code below this line
        for ( let i = 0; i < contacts.length; i++)
            if ( name === contacts[i].firstName) {
                if ( contacts[i][prop] !== undefined )
                    return contacts[i][prop];
                return "No such property";
            }
        return "No such contact";
        // Only change code above this line
    }
```

### [Reusable Function](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions)

#### My Solution

```javascript
    const reusableFunction= () => {
        console.log("Hi World");
    };

    reusableFunction();
```

### [Function without returned value](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-undefined-value-returned-from-a-function)

#### My Solution

```javascript
    const addFive = () => {
        sum += 5;
    };
    addFive();
```

### [Function with returned value](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return)

#### My Solution

```javascript
    const timesFive = (number) => {
        return number *= 5;
    }
    timesFive();
```

---

### Quiz project

[Day3QuizProject](./QuizProject/Quiz.html)

### Sources to review
- #### [MDN](https://developer.mozilla.org/)
- #### [Free code camp](https://www.freecodecamp.org/)