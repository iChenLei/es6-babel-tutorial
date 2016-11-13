fs.readFile('/etc/passwd', function (err, data) {
  if (err) throw err;
  console.log(data);
});

function *asyncJob() {
  // ...其他代码
  var f = yield readFile(fileA);
  // ...其他代码
}


function* gen(x){
  var y = yield x + 2;
  return y;
}

var g = gen(1);
g.next() // { value: 3, done: false }
g.next() // { value: undefined, done: true }

function* gen(x){
  try {
    var y = yield x + 2;
  } catch (e){
    console.log(e);
  }
  return y;
}

var g = gen(1);
g.next();
g.throw('出错了');
// 出错了

var thunk = function () {
  return x + 5;
};

function f(thunk){
  return thunk() * 2;
}

var asyncReadFile = async function (){
  var f1 = await readFile('/etc/fstab');
  var f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};

