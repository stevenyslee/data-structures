var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.size = function(){
	return this.tail - this.head;
}

Queue.prototype.enqueue = function(value){
	this.storage[this.tail++] = value;
}

Queue.prototype.dequeue = function(){
	if( this.tail - this.head > 0 ){
		let dequeuedValue = this.storage[this.head];
		this.storage[this.head++] = undefined;
		return dequeuedValue;
	}
}

