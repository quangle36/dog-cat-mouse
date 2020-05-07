var Cat = require('./cat');
var Mouse = require('./mouse');
var Elephant = require('./elephant');

var cat = new Cat();
var mouse = new Mouse('Hai');
var elephant = new Elephant();
try {
	cat.eat(elephant);
} catch (error) {
	console.log('Error while cat eating');
}

console.log(cat);