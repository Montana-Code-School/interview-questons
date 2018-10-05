## JavaScript
#### General
* What is JavaScript?
* What is the difference between a method and a function in javascript?
* Describe some steps you might take to debug a block of Javascript code.
* Describe the differences between let, const, and var
* What are some of the ways you can access HTML elements in JS?
* `null` vs `undefined`
	* What does `typeof null` output?
* `==` vs `===`
* Scope
	* global - Why should you not touch it
	* functional
	* lexical
	* block
* What is a closure?
* Native vs Host variables
* What is variable hoisting?
	* Can you use functions defined below where they're called?
	* What about variables
* Does JS pass parameters by value or reference?
* What is an infinite loop? What are the consequences?
* What is React? 
* Syntactical differences between es5 and es6?
* List and define the primitive data types. 

#### Keywords
* `this`
* `new`
* `window`
* `document`
* `process`

#### Methods
* `.bind()`
* `.call()`
* `.apply()`
* `.pop()`

#### Functions
* Function expressions vs declarations
	* What's helpful about a named function expression?
	* What's the benefit of a function expression
* What are anonymous functions?
* Immediately Invoked Function Expressions (IIFEs - pronounced "if e"). What are the benefits?

#### Objects
* Prototypal inheritance
	* What is an object's `prototype`?
* List two ways in which the variable can be assigned to an empty object.

#### Experiments
* What do the following lines output, and why?
``` JavaScript
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```
* What will console.log print out

``` JavaScript
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}
```