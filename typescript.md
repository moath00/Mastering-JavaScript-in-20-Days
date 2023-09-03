
# Typing JavaScript: TypeScript:

**TypeScript is an open source, typed syntactic superset of JavaScript**
- Compiles to readable IS
- Three parts: Language, Language Server and Compiler
- Kind of like a fancy linter

**Why developers want types?**
1. It allows you, as a code author, to leave more of your intent "on the page"
```typescript
    function add(a: number, b: number): number { // type of inputs and returned value
        return a + b
    }
```
2. It has the potential to move some kinds of errors from runtime to compile time
Examples:
- Values that are potentially absent (null or undefined)
- Incomplete refactoring
- Breakage around internal code contracts (e.g., an argument becomes required)
3. It serves as the foundation for a great code authoring experience.

**A very simple TypeScript project that consists of only three files:**
- package. json # Package manifest
- tsconfig.json # TypeScript compiler settings
- src/index.ts # "the program"

package. json (view source)
```json
    {
        "name": "hello-ts",
        "license": "NOLICENSE",
        "devDependencies": {
            "typescript": "^4.3.2"
        }, "scripts": {
            "dev": "tsc --watch --preservewatchOutput" // npm script can be another thing
        }
    }
```

tsconfig. json (view source)
```json
    {
        "compilerOptions": {
        "outDir": "dist", // where to put the TS files
        "target": "ES2017", // which level of J support to target
        "declaration": true, // add declaration files file.ts
        "module": "CommonJS" // modules on
        },
        "include": ["src"] // which files to compile
    }
```

**Variables & Values:**

In TypeScript, variables are "born" with their types. let keyword give the variables specific type, but const keyword give the variable specific subtype called **literal type**. It's like const number = 6; this means that the variable is not just a number, it's any number that is 6. 'any' is the more flexible type in TypeScript (no constrains like in JavaScript).

Types help to know where is the error, determined the errors causes.

The Object declaration in TypeScript:

```typescript
    let car: {
        make: string;
        model: string;
        year: number;
    }
```

If we may have a variable or maybe not, we use '?', chargeVoltage?: number => this means that the variable is optionally may be there and if it exists then will be number and maybe not exist.

We can have index signatures as:

```typescript
    const phones: {
        [k: string]: {
            country: string;
            area: string;
            number: string
        }
    } = {}
    phones.fax;
```

In array, we only add [] near the type of the array. We can specify exactly each element data type (in these cases we have limitations but we can use push and pop).

Type checking is: Is the variable type-equivalent to what the value is? || Is the function type-equivalent to to what the value will return?

Structural type systems are all about STRUCTURE or SHAPE.

Duck typing
"Duck typing" gets its name from the "duck test".
"If it looks like a duck, swims like a duck, and quack like a duck, then it probably is a duck".
In practice, this is very similar to structural typing, but "Duck typing" is usually used to describe dynamic type systems.

(Union and Intersection types)

Union sub types used | to be represented between to data types or more, or values.

I need to read more about narrowing.

Discriminated Unions, read more.

Intersection types (overlap).

Type aliases, allowing us to:
- define a more meaningful name for this type
- declare the particulars of the type in a single place
- import and export this type from modules, the same as if it were an exported value

```typescript
    // aliases example
    type UserContactInfo = {
        name: string;
        email: string;
    }
```

Interfaces: is a way of defining an object type. For example, string | number is not an object type, because it makes use of the union type operator. We use extend, implements and interfaces.

Choosing which to use: In many situations, either a type alias or an interface would be perfectly fine, however...
1. If you need to define something other than an object type (e.g., use of the | union type operator), you must use a type alias
2. If you need to define a type to use with the implements heritage term, it's best to use an interface
3. If you need to allow consumers of your types to augment them, you must use an interface.

Recursion: Recursive types, are self-referential, and are often used to describe infinitely nestable types. For example, consider infinitely nestable arrays of numbers. For example, type NestedType: number | NestedArray[];

JSON type:A JSON value MUST be an
- object
- array
- number
- string,

or one of the following three literal names:
- false
- true
- null

Functions: Callable types:

call signatures:
```typescript
    interface TwoNumberCalculation {
        (x: number, y: number): number;
    }
    type TwoNumberCalc = (x: number, y: number) => number

    const add: TwoNumberCalculation = (a, b) => a + b;
    //                                          (parameter) a: number
    const subtract: TwoNumberCalc = (x, y) => x - y;
    //                                          (parameter) x: number
```

Arguments list or returned type:
- void
- undefined

Construct signature

Function overloads: more headers for the function and one implementation.

In TypeScript, we need to implement the type of 'this' I will receive in the function arguments (signature).

> [!NOTE]
> TypeScript understands that bind , call or apply will result in the proper this being passed to the function as part of its invocation.

**Classes:**

Class Fields:

```typescript
    class Car {
        make: string;
        model: string;
        year: number;
        constructor (make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
    }
```

Access modifier keywords:

public, private and protected.
JavaScript fields:
use '#' , readonly keyword , super().

Top and Bottom types:

Types describe sets of allowed values using {}.
```typescript
    let a: 5 | 6 | 7; // anything in { 5, 6, 7 }
    let b: null; // anything in { null }
    let c: {
        favoriteFruit?: "pineapple" // { "pineapple", undefined },
    }
```
Top types: any possible value allowed by the system. (any and unknown)

> [!IMPORTANT]
> However, unknown is different from any in a very important way: Values with an unknown type cannot be used without first applying a type guard.

Bottom types: no possible value allowed by the system. (never)

Type guard and Narrowing: checking and build-in functions.

User-defined type guards: we can use checking (if , else if , ...), is keyword, asserts keyword

Nullish values: null, undefined and void. (void means the value of the functions must be ignored)

Non-null safe value: using (!).

Generics: Generics allow us to parameterize types, which unlocks great opportunity to reuse types broadly across a TypeScript project. What we need here is some mechanism of defining a relationship between the type of the thing we're passed, and the type of the thing we'll return. This is what Generics are all about. (generics use < >)

Generics Scopes and Constants.

Convenience Casting

**Finally, only use type parameters when you have a real need for them. They introduce complexity, and you shouldn't be adding complexity to your code unless it is worth it!**

## Checkpoint Summary :blue_square:

The key points covered:

- What is TypeScript?
- Introduction

Introduction
Setup

Compiling a TypeScript Program

Variables & Values
Type Categories

Typing Functions

Typing Functions Q&A and Objects

Optional Properties

Index Signatures & Object Q&A

Arrays & Tuples

Structural vs Nominal Types

Union Types

Intersection Types

Type Aliases

Interfaces

JSON Types Exercise
Functions

Functions & Function Overloads

this Types & Best Practices

Classes & Access Modifier Keywords
Types & Values

Top Types: any & unknown

Bottom Types: never

Type Guards & Narrowing

Nullish Values
Generics

Generics

Dictionary map, filter & reduce

Generics Scopes & Restraints
Wrapping Up

Wrapping Up

---

### Question 1:
TODO: Refactor this code

```typescript

```

---

### Sources to review
- 