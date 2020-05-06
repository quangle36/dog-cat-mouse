function Elephant() {
	this.stomach = [];
}
Elephant.prototype.eat = function(cat) {
	this.stomach.push(cat);
}