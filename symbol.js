let s = Symbol();
var log = function(e){
  console.log(e);
};
log(typeof s);

var s1 = Symbol('boo');
log(s1.toString());

var a1 = Symbol();
var a2 = Symbol();
log(a1 === a2);

var b1 = Symbol.for('foo');
var b2 = Symbol.for('foo');
log(b1 === b2);