var pro = new Proxy({},{
  get: function(target,property){
    return 12;
  }
});

console.log(pro.time);

var target = function(){return 'I\'m the target';};
var handler = {
  apply:function(){
    return 'I\'m the proxy';
  }
};

var p = new Proxy(target,handler);

console.log(p());

var ooo = Object.getPrototypeOf("foo");
console.log(ooo == '');

var sd = Reflect.has(Object,'apply');
console.log(sd);