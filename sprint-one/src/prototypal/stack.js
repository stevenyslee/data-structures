var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newStack = Object.create(stackMethods);
  newStack.count = 0;
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

stackMethods.size = function(){
	return this.count;
}

stackMethods.push = function(value){
	this.storage[this.count++] = value;
}

stackMethods.pop = function(){
	if( this.count > 0 ){
		let poppedValue = this.storage[this.count - 1];
		this.storage[this.count--] = undefined;
		return poppedValue;
	}
}