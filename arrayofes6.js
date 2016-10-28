let arraylike = {
  '0':'a',
  '1':'b',
  '2':'c',
  length:3
};


//ES6
let arr2 = Array.from(arraylike);
console.log(arr2);

console.log(Array.from(arraylike,x=>x+"sa"));

console.log(Array.from({length:3},()=>"hello"));

var c = Array.of(1,2,3,6);
console.log(c);

var d = [1,2,3,4,5,6].find( n => n>3);
console.log(d);

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}

console.log([1,2,3].includes(2));