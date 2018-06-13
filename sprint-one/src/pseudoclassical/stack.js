var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Stack.prototype.size = function(){
	return this.count;
}

Stack.prototype.push = function(value){
	this.storage[this.count++] = value;
}

Stack.prototype.pop = function(){
	if( this.count > 0 ){
		let poppedValue = this.storage[this.count - 1];
		this.storage[this.count--] = undefined;
		return poppedValue;
	}
}