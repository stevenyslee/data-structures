var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  let head = 0;
  let tail = 0;
  someInstance.enqueue = function(value) {
    storage[tail++] = value;
  };

  someInstance.dequeue = function() {
    if( tail - head > 0 ){
      let poppedValue = storage[head];
      storage[head++] = undefined;
      return poppedValue;
    }
  };

  someInstance.size = function() {
    return tail - head;
  };

  return someInstance;
};
