var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.itemsInStorage = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;

};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.itemsInStorage] = value;
  this.itemsInStorage++;
};

stackMethods.pop = function(){
  this.itemsInStorage--;
  var poppedVal = this.storage[this.itemsInStorage];
  delete this.storage[this.itemsInStorage];
  return poppedVal;
};

stackMethods.size = function(){
  return Math.max(this.itemsInStorage, 0);
};


