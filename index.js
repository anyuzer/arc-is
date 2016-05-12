var nativeTable = {
    '[object Boolean]':'boolean',
    '[object Number]':'number',
    '[object String]':'string',
    '[object Function]':'function',
    '[object Array]':'array',
    '[object Date]':'date',
    '[object RegExp]':'regExp',
    '[object Object]':'object',
    '[object Undefined]':'undefined',
    '[object Null]':'null'
};

module.exports = function is(_val,_objType){
    var $return,toString;
    if(_val === undefined){ return 'undefined'; }
    if(_val === null){ return 'null'; }
    if(_val instanceof Error){ return 'Error' };

    $return = nativeTable[Object.prototype.toString.call(_val)];
    if(!_objType){
        return $return || 'object';
    }

    toString = (_val.toString ? _val.toString() : Object.prototype.toString.call(_val)).match(/\[object ([^\]]*)\]/);
    if(!toString){
        return $return;
    }
    return toString[1];
};