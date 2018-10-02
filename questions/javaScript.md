## JavaScript
* keywords
	* `this`
	* `new`
	* `window`
	* `process`
* `.bind()`
* `.call()`
* `.apply()`
* `null` vs `undefined`
	* What does `typeof null` output?
* `==` vs `===`
* Function expressions vs declarations
	* What's helpful about a named function expression?
	* What's the benefit of a function expression
* What are anonymous functions?
* Prototypal inheritance
	* What is an object's `prototype`?
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
* Primitives
* Immediately Invoked Function Expressions (IIFEs - pronounced "if e"). What are the benefits?
* Does JS pass parameters by value or reference?
* What do the following lines output, and why?
	console.log(1 < 2 < 3);
	console.log(3 > 2 > 1);
* What will console.log print out
	const arr = [10, 12, 15, 21];
 	for (var i = 0; i < arr.length; i++) {
  	setTimeout(function() {
    	console.log('Index: ' + i + ', element: ' + arr[i]);
  	}, 3000);
}
*
