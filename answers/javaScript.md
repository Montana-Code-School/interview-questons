* `null` vs `undefined` - `null` means there is 'no value'. `undefined` represents a variable that has been declared but has not been assigned value, so has no value.
Unassigned variables are initialized by JavaScript with the default value of `undefined`.`null` assignment must be done programmatically.


* What does `type of null` output? It returns `object` while undefined is a type itself.

* I don't know what react is...
React is a JavaScript library for building user interfaces. It is the view layer for web applications.

#### Keywords
##### `this`
  * context reference
  * _intended_ to refer to the focal OBJECT during method / function _invocation_ (when a method is called)
  * MOST OF THE TIME: The keyword this will be bound to the object that was to the left of the dot WHERE THE FUNCTION WAS CALLED
  * There are 5 run patterns in which `this` can appear
    1. Global reference:

      - looks like: `this`;
      - binding target = global object (window in a browser)
    2. Free function invocation:
      - looks like: `functionName()`;
      - binding target = global object
    3. `.call`, `.apply`, or `.bind`:
      - looks like: `fn.call(target)`, `obj.methodName.call(target)`,
      `obj.methodName.bind(target)`;
      - binding target = the first argument to call or apply or bind;
      - this is to manually specify a `this` binding, like real arguments
    4. Method invocation
      - looks like: `target.methodName()`
      - binding target: object on the left of the CALL TIME dot.
      - purpose: so the moethods run in the ocntext of an object they're found on
    5. Construction mode
      - looks like: `new functionName()`;
      - binding target: a new object created for that invocation
      - purpose: so constructors operate on the instance they're creating

##### `new`
 - *(from http://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript)*
 - It does 4 things:
    1. creates a new object
    2. it sets the new objects internal `prototype` property to be the constructor function's prototype object
    3. it executes the constructor function
    4. it returns the newly created object

##### `window`
 - A global object in the browser. It represents one open browser window. Other `window` objects will be created for any `<iframe>` tags in the window.

##### `document`
 - The root node of the HTML document when an HTML document is loaded into the browser

##### `process`
 - a global object that provides information about the _currently running_ Node.js process

#### Methods
* `.call()`
 - The .call() method calls a function from an object and allows it to be used in another object. Here we can use it to chain constructors.
i.e
 ```JavaScript
    (function Coffee(name, price) {
         Beverage.call(this, name, price);
            this.category = 'coffee'
         }
        var latte = new Coffee('caramel', 4);)
```
 * What does the `.bind()` function do and how can it be used?
`.bind()` simply creates a new function that, when called, has its this keyword
set to the provided value.So, we can pass our desired context to the function.
The simplest use of `bind()` is to make a function that, no matter how it is called,
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
