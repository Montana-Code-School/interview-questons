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

# Keywords
## `this`
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

## `new`
(from http://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript)

It does 4 things:
1. creates a new object
2. it sets the new objects internal `prototype` property to be the constructor function's prototype object
3. it executes the constructor function
4. it returns the newly created object

* `window` - A global object in the browser. It represents one open browser window. Other `window` objects will be created for any `<iframe>` tags in the window.
* `document` - The root node of the HTML document when an HTML document is loaded into the browser
* `process` - a global object that provides information about the _currently running_ Node.js process
