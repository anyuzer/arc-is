# arc-is 

[![Build Status](https://travis-ci.org/anyuzer/arc-is.svg?branch=master)](https://travis-ci.org/anyuzer/arc-is)

A simple, efficient but comprehensive typechecking suite

In addition to native typechecking, it provides reliable behavior for:  
* [ES6 new globally available constructor types] (http://www.ecma-international.org/ecma-262/6.0/#sec-constructor-properties-of-the-global-object)  
* ES6 style classes  
* ES6 extended classes (including native subclasses)  
* NaN, Infinity, Null, Undefined  

## Install

```
$ npm install --save arc-is
```

## Usage
```js
var is = require('arc-is');
is(someUnknownVariable [,returnObjectType]); 
```

**Params**

* `someUnknownVariable` is the variable you want to typecheck.
* `returnObjectType` is optional and tells the function if you want it to return a complex type (non native) if available. If false, is() will always return a lowercase string, otherwise it will return a case sensitive string.


**Examples**
```js
var simpleObj = {};
is(simpleObj); //Returns 'object'
is(simpleObj,true); //Returns 'Object'

var es6global = new Map;
is(es6global); //Returns 'map'
is(es6global,true); //Returns 'Map'

class MyClass{ toString(){ return '[object '+this.constructor.name+']'; } }
is(new MyClass); //Returns 'object'
is(new MyClass,true); //Returns 'MyClass';

class MyArray extends Array{ return '[object '+this.constructor.name+']'; } }
is(new MyArray); //Returns 'array'
is(new MyArray,true); //Returns 'MyArray'
```

##Caveats
* It is far more efficient to not check for a complexType
* If a class does not overwrite the toString() method, it will return the parent's toString() which will likely be Object
* This goes for natively extended globally available classes such as the Error subclasses (ie. TypeError), as these do not overwrite the toString() method, they return the parent's toString() which is Error
* For is() to return the appropriate class name, toString must return the name in the format of '[object $NAME]' which is standard for all native classes
