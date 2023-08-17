
# Day 8: Closures - Async JS - first 30 minutes

### Closures:



### Asynchronous JavaScript:



## Checkpoint Summary :vertical_traffic_light:

The key points covered:

- 

---

### Exercise from freecodecamp.org

### [Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem)

#### My Solution

```javascript
    
```

### [Apply Functional Programming to Convert Strings to URL Slugs](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs)

### My Solution

```javascript
    
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