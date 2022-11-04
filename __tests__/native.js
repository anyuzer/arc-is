import is from '../index.js';

describe('Is native tests', () => {
    it('should return undefined when value is undefined', () => {
        expect(is(undefined)).toEqual('undefined');
        expect(is(undefined, true)).toEqual('Undefined');
    })

    it('should return null when value is null', () => {
        expect(is(null)).toEqual('null');
        expect(is(null, true)).toEqual('Null');
    })

    it('should return array when value is an array', () => {
        expect(is([])).toEqual('array');
        expect(is([], true)).toEqual('Array')
    })

    it('should return arrayBuffer when value is an array buffer', () => {
        expect(is(new ArrayBuffer)).toEqual('arraybuffer');
        expect(is(new ArrayBuffer, true)).toEqual('ArrayBuffer')
    })

    it('should return boolean when value is a boolean', () => {
        expect(is(true)).toEqual('boolean');
        expect(is(false, true)).toEqual('Boolean')
    })

    it('should return dataview when value is a DataView', () => {
        expect(is(new DataView(new ArrayBuffer))).toEqual('dataview');
        expect(is(new DataView(new ArrayBuffer), true)).toEqual('DataView');
    })

    it('should return data when value is a Date', () => {
        expect(is(new Date)).toEqual('date');
        expect(is(new Date, true)).toEqual('Date');
    })

    it('should return error when value is a Error', () => {
        expect(is(new Error)).toEqual('error');
        expect(is(new Error, true)).toEqual('Error')
    });

    it('should return error when value is a EvalError', () => {
        //ES6 subclasses (in this case of Error) do not overwrite their toString, so effectively is ends up calling Errors toString which returns as expected
        expect(is(new EvalError)).toEqual('error');
        expect(is(new EvalError, true)).toEqual('Error')
    });

    it('should return error when value is a RangeError', () => {
        //ES6 subclasses (in this case of Error) do not overwrite their toString, so effectively is ends up calling Errors toString which returns as expected
        expect(is(new RangeError)).toEqual('error');
        expect(is(new RangeError, true)).toEqual('Error')
    });

    it('should return error when value is a ReferenceError', () => {
        //ES6 subclasses (in this case of Error) do not overwrite their toString, so effectively is ends up calling Errors toString which returns as expected
        expect(is(new ReferenceError)).toEqual('error');
        expect(is(new ReferenceError, true)).toEqual('Error')
    });

    it('should return error when value is a SyntaxError', () => {
        //ES6 subclasses (in this case of Error) do not overwrite their toString, so effectively is ends up calling Errors toString which returns as expected
        expect(is(new SyntaxError)).toEqual('error');
        expect(is(new SyntaxError, true)).toEqual('Error')
    });

    it('should return error when value is a TypeError', () => {
        //ES6 subclasses (in this case of Error) do not overwrite their toString, so effectively is ends up calling Errors toString which returns as expected
        expect(is(new TypeError)).toEqual('error');
        expect(is(new TypeError, true)).toEqual('Error')
    });

    it('should return error when value is a URIError', () => {
        //ES6 subclasses (in this case of Error) do not overwrite their toString, so effectively is ends up calling Errors toString which returns as expected
        expect(is(new URIError)).toEqual('error');
        expect(is(new URIError, true)).toEqual('Error')
    });

    it('should return float32array when value is a Float32Array', () => {
        expect(is(new Float32Array(1))).toEqual('float32array');
        expect(is(new Float32Array(1), true)).toEqual('Float32Array')
    });

    it('should return float64array when value is a Float64Array', () => {
        expect(is(new Float64Array(1))).toEqual('float64array');
        expect(is(new Float64Array(1), true)).toEqual('Float64Array')
    });

    it('should return int8array when value is a Int8Array', () => {
        expect(is(new Int8Array(1))).toEqual('int8array');
        expect(is(new Int8Array(1), true)).toEqual('Int8Array')
    });

    it('should return int16array when value is a Int16Array', () => {
        expect(is(new Int16Array(1))).toEqual('int16array');
        expect(is(new Int16Array(1), true)).toEqual('Int16Array')
    });

    it('should return int32array when value is a Int32Array', () => {
        expect(is(new Int32Array(1))).toEqual('int32array');
        expect(is(new Int32Array(1), true)).toEqual('Int32Array')
    });

    it('should return uint8array when value is a UInt8Array', () => {
        expect(is(new Uint8Array(1))).toEqual('uint8array');
        expect(is(new Uint8Array(1), true)).toEqual('Uint8Array')
    });

    it('should return uint8clampedarray when value is a UIntClamped8Array', () => {
        expect(is(new Uint8ClampedArray(1))).toEqual('uint8clampedarray');
        expect(is(new Uint8ClampedArray(1), true)).toEqual('Uint8ClampedArray')
    });

    it('should return uint16array when value is a UInt16Array', () => {
        expect(is(new Uint16Array(1))).toEqual('uint16array');
        expect(is(new Uint16Array(1), true)).toEqual('Uint16Array')
    });

    it('should return uint32array when value is a UInt32Array', () => {
        expect(is(new Uint32Array(1))).toEqual('uint32array');
        expect(is(new Uint32Array(1), true)).toEqual('Uint32Array')
    });

    it('should return function when value is a Function', () => {
        expect(is(()=>{})).toEqual('function');
        expect(is(()=>{}, true)).toEqual('Function')
    });

    it('should return asyncfunction when value is a AsyncFunction', () => {
        expect(is(async ()=>{})).toEqual('asyncfunction');
        expect(is(async ()=>{}, true)).toEqual('AsyncFunction')
    });

    it('should return promise when value is a Promise', () => {
        expect(is(new Promise(()=>{}))).toEqual('promise');
        expect(is(new Promise(()=>{}), true)).toEqual('Promise')
    });

    it('should return map when value is a Map', () => {
        expect(is(new Map)).toEqual('map');
        expect(is(new Map, true)).toEqual('Map')
    });

    it('should return number when value is a Number', () => {
        expect(is(1)).toEqual('number');
        expect(is(1, true)).toEqual('Number')
    });

    it('should return object when value is a plain native object', () => {
        expect(is({})).toEqual('object');
        expect(is({}, true)).toEqual('Object')
    });

    it('should return regexp when value is a regular expression', () => {
        expect(is(/[A-Z]/)).toEqual('regexp');
        expect(is(/[A-Z]/, true)).toEqual('RegExp')
    });

    it('should return set when value is a Set', () => {
        expect(is(new Set)).toEqual('set');
        expect(is(new Set, true)).toEqual('Set')
    });

    it('should return string when value is a string', () => {
        expect(is('a string')).toEqual('string');
        expect(is('a string', true)).toEqual('String')
    });

    it('should return symbol when value is a Symbol', () => {
        expect(is(Symbol('?'))).toEqual('symbol');
        expect(is(Symbol('?'), true)).toEqual('Symbol')
    });

    it('should return weakmap when value is a WeakMap', () => {
        expect(is(new WeakMap)).toEqual('weakmap');
        expect(is(new WeakMap, true)).toEqual('WeakMap')
    });

    it('should return weakset when value is a WeakSet', () => {
        expect(is(new WeakSet)).toEqual('weakset');
        expect(is(new WeakSet, true)).toEqual('WeakSet')
    });
})