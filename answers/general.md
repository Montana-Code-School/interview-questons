## General
* What is API and how is it used?
 - an API is an Application Programming Interface that essentially allows access to outside databases and the ability to manipulate and utilize the data within.


* Asynchronous code
 - Code in which all processes are able to work independently of each other without waiting for other process to finish before more start.

* Immutability
 - Means literally that nothing can be mutated. This is the difference between const (which is immutable) and let or var (which are mutable). In javascript only primitive types can really be immutable (string, number, bool). For objects, they are mutable by default b/c the assignment operator is essentially just a memory pointer, so any change will effect all.

* Attributes vs Property
- Properties can be thought of as children, or maybe siblings of attributes. When you define attributes in your html and once the browser parses it, a corresponding DOM node is created. This node is an object, and therefore it has properties. Properties are like variables for a particular element and therefor can have different types (boolean, Int, string, etc.) An attribute can only be a string though. They often mirror each other, except like in cases like inputs where the .value returns the input and the .getAttribute('value') returns the default value placeholder text. Or a checkbox; if console.loged via .prop will return true while if console.loged via .attr will return 'checked'. If an element has a default value the attribute will return that default. You can use custom attributes for when there is no property associated with it. You can use custom properties, but thats frown upon. 
