function log(x,y="world"){
  console.log(x,y);
}

log("hello","meinv");

function foo({x,y=3}){
  console.log(x,y);
};

function f(x=1,y){
  return [x,y];
};

var len = (function(a,b,c=1){}).length;
console.log(len); // 2

var x = 1;
function foo(x,y=function(){x=2;}){
  x = 3;
  y();
  console.log(x);
}

function throwIfMissing() {
  throw new Error('Missing parameter');
}

function zoo(mustBeProvided = throwIfMissing()) {
  return mustBeProvided;
}

function add(...values){
  let sum = 0;
  for(var val of values){
    sum+=val;
  };
  return sum;
};

console.log(add(1,2,3));

console.log(...[1,2,3]);
// console.log.apply(console,[1,2,3])

var max = Math.max(...[1,3,2,5]);
console.log(max);

console.log([..."hello"]);

var dd = function boo(){};
console.log(dd.name);

var f = v => (v+1);
console.log(f(2));
