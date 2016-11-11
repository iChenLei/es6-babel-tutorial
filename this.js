var person = {
    name:"zhagsan",
    describe:function(){
        return 'name is '+this.name;
    }
};

person.describe();

var obj = function(p){
    this.p = p;
};

Obj.prototype.m = function(){
    return this.p;
};

var n = 123;
var obj = { n: 456 };

function a() {
  console.log(this.n);
}

a.call() // 123
a.call(null) // 123
a.call(undefined) // 123
a.call(window) // 123
a.call(obj) // 456


