var s = new Set();
[2,3,4,5,4,3,2].map(x => s.add(x));
for (let i of s){
  console.log(i);  //2,3,4,5
}

//set的成员是唯一的

var s1 = new Set([1,2,3,4,5,2]);
console.log([...s1]); //[1,2,3,4,5]

s1.add(45);
s1.delete(45);
s1.has(45);
s1.clear();

//数组去重新方法
function dedupe(array) {
  return Array.from(new Set(array));
}

dedupe([1, 1, 2, 3]);

var ws =new WeakSet();

let map = new Map();
map.set(1,"aaa");
console.log(map.size);