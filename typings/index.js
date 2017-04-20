
let Cat = function(name, color){
  this.name = name;
  this.color = color;
}

export default {
  stringObj: new String('Hello world'),
  myString: 'Hello world',
  myNum: 1,
  myDecimal: .02,
  myFloat: .1000000000000000,
  myFloat2: .2,
  myArrowFn: null,
  myObj: {},
  Cat: Cat,
  Fluffy: Cat
};
