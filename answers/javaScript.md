* `null` vs `undefined` - Null means there is 'no value'. Undefined represents a variable that has been declared but has not been assigned value, so has no value.
Unassigned variables are initialized by JavaScript with the default value of undefined.Null assignment must be done programmatically.

* What does `type of null` output? It returns 'object' while undefined is a type itself.

* I don't know what react is...
React is a JavaScript library for building user interfaces. It is the view layer for web applications.

* `.call()` - The .call() method calls a function from an object and allows it to be used in another object. Here we can use it to chain constructors.
i.e (function Coffee(name, price) {
   Beverage.call(this, name, price);
   this.category = 'coffee'
 }
 var latte = new Coffee('caramel', 4);)

 * What does the `.bind()` function do and how can it be used?
.bind() simply creates a new function that, when called, has its this keyword
set to the provided value.So, we can pass our desired context to the function.
The simplest use of bind() is to make a function that, no matter how it is called,
is called with a particular this value. A common mistake for new JavaScript
programmers is to extract a method from an object, then to later call that
function and expect it to use the original object as its this (e.g. by using
that method in callback-based code). Without special care, however, the
original object is usually lost. Creating a bound function from the function,
using the original object, neatly solves this problem:
 ```JavaScript
 this.x = 9;    // this refers to global "window" object here in the browser
 var module = {
   x: 81,
   getX: function() { return this.x; }
 };

 module.getX(); // 81

 var retrieveX = module.getX;
 retrieveX();   
 // returns 9 - The function gets invoked at the global scope

 // Create a new function with 'this' bound to module
 // New programmers might confuse the
 // global var x with module's property x
 var boundGetX = retrieveX.bind(module);
 boundGetX(); // 81
```
*
