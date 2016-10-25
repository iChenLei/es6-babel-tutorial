var a = "\u0061";
var b = "\u{20BB7}";

var c = "string";
console.log(c.charAt(0));
console.log(c.charCodeAt(0));

var d = "陈1";
console.log(d.codePointAt(0));


console.log(String.fromCodePoint(0x20BB7));

//字符串的遍历接口
for(let point of "chen"){
  console.log(point);
}

console.log('𠮷'.at(0));

var e = "hello world";
console.log(e.includes("he"));
console.log(e.startsWith("h"));
console.log(e.endsWith("ld"));

var f = "x".repeat(3.6);
console.log(f);

var g = "chenlei";
console.log(`hello ${g} world`);

String.raw`Hi\n${2+3}!`;


function _taggedTemplateLiteral(strings, raw) { 
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }