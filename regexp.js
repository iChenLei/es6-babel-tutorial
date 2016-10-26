var regex = new RegExp(/xyx/,"i");
console.log(regex);
"hello".match("hell");

//ES6中主要是用u解决字符问题

var s = "aaa_a_aaa";
var r = /a+/;
console.log(r.exec(s));

const f = "hello";

var u = /hello/y;
console.log(r.flags);
