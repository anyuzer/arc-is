const is = require('../index');

//A non-inherited class, with an overwritten toString
class Other{
    toString(){
        return '[object '+this.constructor.name+']';
    }
}

//A non-inherited class, without an overwritten toString
class Other2{}

//A class that inherits from a native type (Object) and overwrites the toString
class SubObject extends Object{
    toString(){
        return '[object '+this.constructor.name+']';
    }
}

//A class that inherits from a native type (Array) and overwrites the toString
class SubArray extends Array{
    toString(){
        return '[object '+this.constructor.name+']';
    }
}

describe('Is other types test', () => {
    it('should return a standard object for a custom class, if type check is not true', () => {
        expect(is(new Other)).toEqual('object');
    })

    it('should return the constructor name if toString has been overwritten and type check is true', () => {
        expect(is(new Other, true)).toEqual('Other');
    })

    it('should not return the constructor name if toString has been overwritten and type check is true', () => {
        expect(is(new Other2, true)).toEqual('Object');
    })

    it('should handle extension of objects appropriately', () => {
        expect(is(new SubObject())).toEqual('object');
        expect(is(new SubObject(), true)).toEqual('SubObject');
        expect(is(new SubArray())).toEqual('array');
        expect(is(new SubArray(), true)).toEqual('SubArray');

    })

    it('should return the correct type for non constructable objects that we do not have in our native table', () => {
        expect(is(Math)).toEqual('math');
        expect(is(Math,true)).toEqual('Math');
        expect(is(NaN)).toEqual('nan');
        expect(is(NaN,true)).toEqual('NaN');
        expect(is(Infinity)).toEqual('infinity');
        expect(is(Infinity,true)).toEqual('Infinity');
    })
});