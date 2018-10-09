#### General
* `null` vs `undefined`
 - Null means there is 'no value'. Undefined represents a    variable that has been declared but has not been assigned value, so has no value. Unassigned variables are initialized by JavaScript with the default value of undefined.Null assignment must be done programmatically.

* What does `type of null` output?
- It returns 'object' while undefined is a type itself.

* What is React?
 - React is a JavaScript library for building user interfaces. It is the view layer for web applications.

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
    1. It creates an instance of an object.
    2. It sets the new objects internal `prototype` property to be the constructor function's prototype object.
    3. It executes the constructor function.
    4. It returns the newly created object.

##### `window`
 - A global object in the browser. It represents one open browser window. Other `window` objects will be created for any `<iframe>` tags in the window.
 - The window object is also where all global variables are stored. Any methods stored globally become methods of the window object.
 - Some common window methods are: alert(), open(), confirm(), and print().

##### `document`
 - The root node of the HTML document when an HTML document is loaded into the browser

##### `process`
 - a global object that provides information about the _currently running_ Node.js process and provides control over it. As a global, it is always available to  Node.js applications without using `require()`.

#### When would you use `let`, and `const`? Why avoid using `var`?
`const` is a signal that the identifier won’t be reassigned.

`let`, is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm. It also signals that the variable will be used only in the block it’s defined in, which is not always the entire containing function.

`var` is now the weakest signal available when you define a variable in JavaScript. The variable may or may not be reassigned, and the variable may or may not be used for an entire function, or just for the purpose of a block or loop.

## Why avoid using `var`?
No error is thrown if you declare the same variable twice using `var` (conversely, both `let` and `const` will throw an error if a variable is declared twice).Variables declared with `var` are not block scoped (although they are function scoped), while with `let` and `const` they are. This is important because what’s the point of block scoping if you’re not going to use it. So using `var` in this context would require a situation in which a variable declared inside a function would need to be used in the global scope.


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
* `.apply()`
 - The .apply() method allows you to apply a method of one object on another object. It is similar to the .call() method but is also able to take in a single array as an argument.
 i.e

 ```JavaScript
     let order = {
       pizzaOrder: function(topping1, topping2) {
         return this.size + " " + this.crust + ": " + topping1 + ", " + topping2;
       }
     }

     let thisOrder = {
       size: "large",
       crust: "hand tossed"
     }

     console.log(order.pizzaOrder.apply(thisOrder, ["cheese", "pepperoni"]))
     // expected output: large hand tossed: cheese, pepperoni
 ```
