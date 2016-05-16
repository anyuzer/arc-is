var is = require('../');
var assert = require('tap');

//A non-inherited class, with an overwritten toString
class Other{
    toString(){
        return '[object '+this.constructor.name+']';
    }
}

assert.equal(is(new Other()),'object');
assert.equal(is(new Other(),true),'Other');

//A non-inherited class, without an overwritten toString
class Other2{};
assert.equal(is(new Other2()),'object');
assert.equal(is(new Other2(),true),'Object');

//A class that inherits from a native type (Object) and overwrites the toString
class SubObject extends Object{
    toString(){
        return '[object '+this.constructor.name+']';
    }
}

assert.equal(is(new SubObject()),'object');
assert.equal(is(new SubObject(),true),'SubObject');

//A class that inherits from a native type (Array) and overwrites the toString
class SubArray extends Array{
    toString(){
        return '[object '+this.constructor.name+']';
    }
}

assert.equal(is(new SubArray()),'array');
assert.equal(is(new SubArray(),true),'SubArray');

//Let's check non handled, non constructable objects like math that we do not have in our native table (we can add it if we want but it should handle it)
assert.equal(is(Math),'math');
assert.equal(is(Math,true),'Math');

//Checking NaN
assert.equal(is(NaN),'nan');
assert.equal(is(NaN,true),'NaN');

//Checking infinity
assert.equal(is(Infinity),'infinity');
assert.equal(is(Infinity,true),'Infinity');