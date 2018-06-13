var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newQueue = Object.create(queueMethods);
  newQueue.head = 0;
  newQueue.tail = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function(){
	return this.tail - this.head;
}

queueMethods.enqueue = function(value){
	this.storage[this.tail++] = value;
}

queueMethods.dequeue = function(){
	if( this.tail - this.head !== 0 ){
		let dequeuedValue = this.storage[this.head];
		this.storage[this.head++] = undefined;
		return dequeuedValue;
	}
}
