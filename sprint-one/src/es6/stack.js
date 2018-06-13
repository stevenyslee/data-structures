class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.count = 0;
  }

  size(){
  	return this.count;
  }

  push(value){
  	this.storage[this.count++] = value;
  }

  pop(){
  	if( this.count > 0 ){
  		let popppedValue = this.storage[this.count - 1];
  		this.storage[this.count--] = undefined;
  		return popppedValue;
  	}
  }
}