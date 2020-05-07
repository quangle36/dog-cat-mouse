var Elephant = require('./elephant');
var Cat = require('./cat')

var elephant = new Elephant('kiki');
var tom = new Cat();
elephant.eat(tom);
console.log(elephant);