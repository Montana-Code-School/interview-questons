## JavaScript
* `null` vs `undefined` - Null means there is 'no value.' Undefined represents a variable that has not been declared or not given a value.
	* What does `type of null` output? It returns 'object.'

* `.call()` - The .call() method calls a function from an object and allows it to be used in another object. Here we can use it to chain constructors.
i.e (function Coffee(name, price) {
     Beverage.call(this, name, price);
     this.category = 'coffee'
   }
   var latte = new Coffee('caramel', 4);)
