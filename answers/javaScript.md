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
