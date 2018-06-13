class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.tail = 0;
  	this.head = 0;
  }

  size(){
  	return this.tail - this.head;
  }

  enqueue(value){
  	this.storage[this.tail++] = value;
  }

  dequeue(){
  	if( this.tail - this.head > 0 ){
  		let dequeuedValue = this.storage[this.head];
  		this.storage[this.head++] = undefined;
  		return dequeuedValue;
  	}
  }

}
