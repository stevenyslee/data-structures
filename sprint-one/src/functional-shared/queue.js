var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newQueue = {};
  newQueue.head = 0;
  newQueue.tail = 0;
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);
  // console.log(newQueue.size);
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
	if( this.tail !== this.head ){
		let poppedValue = this.storage[this.head];
		this.storage[this.head++] = undefined;
		return poppedValue;
	}
}