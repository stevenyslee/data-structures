var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  let position = 0;
  someInstance.push = function(value) {
    storage[position++] = value;
  };

  someInstance.pop = function() {
    if( position !== 0 ){
      let poppedValue =  storage[position - 1];
      storage[position--] = undefined;
      return poppedValue;
    }
  };

  someInstance.size = function() {
    return position;
  };

  return someInstance;
};
