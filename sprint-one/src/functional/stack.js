var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    var numItemsInStorage = Object.keys(storage).length;
    storage[numItemsInStorage] = value;
  };

  someInstance.pop = function(){
    var numItemsInStorage = Object.keys(storage).length;
    var poppedVal = storage[numItemsInStorage - 1];
    delete storage[numItemsInStorage - 1];
    return poppedVal;
  };

  someInstance.size = function(){
    var numItemsInStorage = Object.keys(storage).length;
    return numItemsInStorage;
  };

  return someInstance;
};
