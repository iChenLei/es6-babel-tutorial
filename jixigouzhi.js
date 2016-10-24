var [a,b,c] = [1,2,3];

let [x,[y,z]] = [1,[2,3]];

let[one,...two] = [1,2,3,4,5,5];

let[e,,t] = [1,2,3];

var [fooq] = [];

let[qq,[ww],ee] = [1,[2,3],4];

let[xx,yy,zz] = new Set(["a","b","c"]);

function* abs(){
  var a = 0;
  var b = 1;
  while(true){
    yield a;
    [a,b] = [b,a+b];
  }
}

var [first] = abs();

var [chen = "true"] = [];

function f(){
  console.log('aaa');
}

let [df = f()] = [1];

var {yi,ui} = {yi:"yiiii",ui:"uiiii"};
let {sin,cos,log} = Math;

let {length:len} = 'hello';

[[1, 2], [3, 4]].map(([a, b]) => a + b);

[x, y] = [y, x];


var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}

"use strict";

var _slicedToArray = (function () {
     function sliceIterator(arr, i) {
          var _arr = []; var _n = true; var _d = false; var _e = undefined;
           try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) 
               { _arr.push(_s.value); if (i && _arr.length === i) break; } } 
               catch (err) { _d = true; _e = err; } 
               finally { try { if (!_n && _i["return"]) _i["return"](); } 
               finally { if (_d) throw _e; } } return _arr; } return function (arr, i)
                { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) 
                { return sliceIterator(arr, i); } else 
                { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var marked0$0 = [abs].map(regeneratorRuntime.mark);
var a = 1;
var b = 2;
var c = 3;
var x = 1;
var y = 2;
var z = 3;
var one = 1;
var two = [2, 3, 4, 5, 5];
var _ref = [1, 2, 3];
var e = _ref[0];
var t = _ref[2];
var _ref2 = [];
var fooq = _ref2[0];
var qq = 1;
var _ref3 = [2, 3];
var ww = _ref3[0];
var ee = 4;

var _ref4 = new Set(["a", "b", "c"]);

var _ref42 = _slicedToArray(_ref4, 3);

var xx = _ref42[0];
var yy = _ref42[1];
var zz = _ref42[2];

function abs() {
  var a, b, _ref5;

  return regeneratorRuntime.wrap(function abs$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        a = 0;
        b = 1;

      case 2:
        if (!true) {
          context$1$0.next = 10;
          break;
        }

        context$1$0.next = 5;
        return a;

      case 5:
        _ref5 = [b, a + b];
        a = _ref5[0];
        b = _ref5[1];
        context$1$0.next = 2;
        break;

      case 10:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

var _abs = abs();

var _abs2 = _slicedToArray(_abs, 1);

var first = _abs2[0];
var _ref6 = [];
var _ref6$0 = _ref6[0];
var chen = _ref6$0 === undefined ? "true" : _ref6$0;

function f() {
  console.log('aaa');
}

var _ = 1;
var df = _ === undefined ? f() : _;
var _yi$ui = { yi: "yiiii", ui: "uiiii" };
var yi = _yi$ui.yi;
var ui = _yi$ui.ui;
var sin = Math.sin;
var cos = Math.cos;
var log = Math.log;
var _hello = 'hello';
var len = _hello.length;

[[1, 2], [3, 4]].map(function (_ref7) {
  var _ref72 = _slicedToArray(_ref7, 2);

  var a = _ref72[0];
  var b = _ref72[1];
  return a + b;
});

var _ref8 = [y, x];
x = _ref8[0];
y = _ref8[1];

var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = map[Symbol.iterator](), _step; 
  !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
   _iteratorNormalCompletion = true) {
    var _step$value = _slicedToArray(_step.value, 2);

    var key = _step$value[0];
    var value = _step$value[1];

    console.log(key + " is " + value);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"]) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}