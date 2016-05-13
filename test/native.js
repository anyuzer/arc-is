var is = require('../');
var assert = require('tap');

var nativeTable = {
    '[object Array]':'Array',
    '[object ArrayBuffer]':'ArrayBuffer',
    '[object Boolean]':'Boolean',
    '[object DataView]':'DataView',
    '[object Date]':'Date',
    '[object Error]':'Error',
    '[object EvalError]':'EvalError',
    '[object Float32Array]':'Float32Array',
    '[object Float64Array]':'Float64Array',
    '[object Function]':'Function',
    '[object Int8Array]':'Int8Array',
    '[object Int16Array]':'Int16Array',
    '[object Int32Array]':'Int32Array',
    '[object Map]':'Map',
    '[object Number]':'Number',
    '[object Object]':'Object',
    '[object Proxy]':'Proxy',
    '[object Promise]':'Promise',
    '[object RangeError]':'RangeError',
    '[object ReferenceError]':'ReferenceError',
    '[object RegExp]':'RegExp',
    '[object Set]':'Set',
    '[object String]':'String',
    '[object Symbol]':'Symbol',
    '[object SyntaxError]':'SyntaxError',
    '[object TypeError]':'TypeError',
    '[object Uint8Array]':'Uint8Array',
    '[object Uint8ClampedArray]':'Uint8ClampedArray',
    '[object Uint16Array]':'Uint16Array',
    '[object Uint32Array]':'Uint32Array',
    '[object URIError]':'URIError',
    '[object WeakMap]':'WeakMap',
    '[object WeakSet]':'WeakSet',
};

//Array
assert.equal(is([]),'array');
assert.equal(is([],true),'Array');

//ArrayBuffer
assert.equal(is(new ArrayBuffer),'arraybuffer');
assert.equal(is(new ArrayBuffer,true),'ArrayBuffer');

//Boolean
assert.equal(is(true),'boolean');
assert.equal(is(true,true),'Boolean');

//Boolean
assert.equal(is(new DataView(new ArrayBuffer)),'dataview');
assert.equal(is(new DataView(new ArrayBuffer),true),'DataView');

//Date
assert.equal(is(new Date),'date');
assert.equal(is(new Date,true),'Date');

//Error
assert.equal(is(new Error),'error');
assert.equal(is(new Error,true),'Error');

//EvalError (ES6 subclasses (in this case of Error) do not overwrite their toString, so effectively is ends up calling Errors toString which returns as expected
assert.equal(is(new EvalError),'error');
assert.equal(is(new EvalError,true),'Error');

//Float32Array
assert.equal(is(new Float32Array(1)),'float32array');
assert.equal(is(new Float32Array(1),true),'Float32Array');

//Float64Array
assert.equal(is(new Float64Array(1)),'float64array');
assert.equal(is(new Float64Array(1),true),'Float64Array');

//Function
assert.equal(is(function(){}),'function');
assert.equal(is(function(){},true),'Function');

//Int8Array
assert.equal(is(new Int8Array(1)),'int8array');
assert.equal(is(new Int8Array(1),true),'Int8Array');



// //Native Object
// assert.equal(is({}),'object');
// assert.equal(is({},true),'Object'); //This is interesting actually.
//
// //Data Object
// assert.equal(is(new Date),'date');
// assert.equal(is(new Date,true),'Date');