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
    '[object WeakSet]':'WeakSet'
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
assert.equal(is(()=>{}),'function');
assert.equal(is(()=>{},true),'Function');

//Int8Array
assert.equal(is(new Int8Array(1)),'int8array');
assert.equal(is(new Int8Array(1),true),'Int8Array');

//Int16Array
assert.equal(is(new Int16Array(1)),'int16array');
assert.equal(is(new Int16Array(1),true),'Int16Array');

//Int32Array
assert.equal(is(new Int32Array(1)),'int32array');
assert.equal(is(new Int32Array(1),true),'Int32Array');

//Map
assert.equal(is(new Map),'map');
assert.equal(is(new Map,true),'Map');

//Number
assert.equal(is(1),'number');
assert.equal(is(1,true),'Number');

//Object
assert.equal(is({}),'object');
assert.equal(is({},true),'Object');

//Proxy: A native type that has been proxied, does not return proxy instead it returns its native type, which is correct but weird.

//Promise
assert.equal(is(new Promise(()=>{})),'promise');
assert.equal(is(new Promise(()=>{}),true),'Promise');

//RangeError (see EvalError note)
assert.equal(is(new RangeError),'error');
assert.equal(is(new RangeError,true),'Error');

//ReferenceError (see EvalError note)
assert.equal(is(new ReferenceError),'error');
assert.equal(is(new ReferenceError,true),'Error');

//RegExp
assert.equal(is(/[A-Z]/),'regexp');
assert.equal(is(/[A-Z]/,true),'RegExp');

//Set
assert.equal(is(new Set),'set');
assert.equal(is(new Set,true),'Set');

//String
assert.equal(is('IS IT?'),'string');
assert.equal(is('IS IT?',true),'String');

//Symbol
assert.equal(is(Symbol('?')),'symbol');
assert.equal(is(Symbol('?'),true),'Symbol');

//SyntaxError (see EvalError note)
assert.equal(is(new SyntaxError),'error');
assert.equal(is(new SyntaxError,true),'Error');

//TypeError (see EvalError note)
assert.equal(is(new TypeError),'error');
assert.equal(is(new TypeError,true),'Error');

//Uint8Array
assert.equal(is(new Uint8Array(1)),'uint8array');
assert.equal(is(new Uint8Array(1),true),'Uint8Array');

//Uint8ClampedArray
assert.equal(is(new Uint8ClampedArray(1)),'uint8clampedarray');
assert.equal(is(new Uint8ClampedArray(1),true),'Uint8ClampedArray');

//Uint16Array
assert.equal(is(new Uint16Array(1)),'uint16array');
assert.equal(is(new Uint16Array(1),true),'Uint16Array');

//Uint32Array
assert.equal(is(new Uint32Array(1)),'uint32array');
assert.equal(is(new Uint32Array(1),true),'Uint32Array');

//URIError (see EvalError note)
assert.equal(is(new URIError),'error');
assert.equal(is(new URIError,true),'Error');

//WeakMap
assert.equal(is(new WeakMap),'weakmap');
assert.equal(is(new WeakMap,true),'WeakMap');

//WeakSet
assert.equal(is(new WeakSet),'weakset');
assert.equal(is(new WeakSet,true),'WeakSet');