var chalk = require('chalk');
function Elephant(name) {
	this.stomach = [];
	this.name = name;
}
Elephant.prototype.eat = function(cat) {
	this.stomach.push(cat);
}

Elephant.prototype.sayHi = function() {
	console.log('Hi! I am a dog. My name is' + chalk.blue(this.name));
}
module.exports = Elephant;