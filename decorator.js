//Decorator

function testable(target){
  target.isTestAble = true;
}

@testable
class MyTestableClass{}
console.log(MyTestableClass.isTestAble);

function boole(isOk){
  return function(target) {
    target.isOk = isOk;
  }
}

@boole(false)
class MyOk{}
console.log(MyOk.isOk);


class Person {
  @nonenumerable
  get kidCount() { return this.children.length; }
}

function nonenumerable(target, name, descriptor) {
  descriptor.enumerable = false;
  return descriptor;
}

function dec(id){
    console.log('evaluated', id);
    return (target, property, descriptor) => console.log('executed', id);
}

class Example {
    @dec(1)
    @dec(2)
    method(){}
}
