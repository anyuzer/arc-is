//Table taken from: http://www.ecma-international.org/ecma-262/6.0/ section 18.3
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
    '[object WeakSet]':'WeakSet'
};

module.exports = function is(_val,_objType){
    console.log(_val,_objType);
    var $return,toString;

    if(_val === undefined){ return (_objType ? 'Undefined' : 'undefined'); }
    if(_val === null){ return (_objType ? 'Null' : 'null'); }

    $return = nativeTable[Object.prototype.toString.call(_val)];
    if($return === 'Number'){
        if(isNaN(_val)){
            return (!_objType ? 'nan' : 'NaN');
        }
        if(!isFinite(_val)){
            return (!_objType ? 'infinity' : 'Infinity');
        }
    }
    if(!_objType && $return){
        return $return.toLowerCase() || 'object';
    }

    if(_val.toString){
        toString = _val.toString().match(/\[object ([^\]]*)\]/);
    }

    if(!toString){
        toString = Object.prototype.toString.call(_val).match(/\[object ([^\]]*)\]/);
    }

    if(!toString){
        return $return;
    }

    return (!_objType ? toString[1].toLowerCase() : toString[1]);
};