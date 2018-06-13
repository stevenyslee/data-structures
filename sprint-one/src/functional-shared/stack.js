var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newStack = {};
  newStack.stackCount = 0;
  newStack.storage = {};
  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.size = function(){
	return this.stackCount;
}

stackMethods.push = function(value){
	this.storage[this.stackCount++] = value;
}

stackMethods.pop = function(){
	if( this.stackCount > 0 ){
		let poppedValue = this.storage[this.stackCount - 1];
		this.storage[this.stackCount--] = undefined;
		return poppedValue;
	}
}