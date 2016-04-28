var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    var numItemsInStorage = Object.keys(storage).length;
    storage[numItemsInStorage] = value;
  };

  someInstance.dequeue = function(){
    var numItemsInStorage = Object.keys(storage).length;
    var dequeuedVal = storage['0'];
    delete storage['0'];
    for(var prop in storage){
      storage[+prop - 1] = storage[prop]; 
    }
    delete storage[numItemsInStorage - 1];
    return dequeuedVal;
  };

  someInstance.size = function(){
    var numItemsInStorage = Object.keys(storage).length;
    return numItemsInStorage;
  };

  return someInstance;
};
