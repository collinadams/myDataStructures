var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  _.extend(someInstance, queueMethods);
  someInstance.storage = {};
  someInstance.start = -1;
  someInstance.end = -1;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.end++;
  this.storage[this.end] = value;
};

queueMethods.dequeue = function(){
  this.size() && this.start++;
  var dequeuedVal = this.storage[this.start];
  delete this.storage[this.start];
  return dequeuedVal; 
};

queueMethods.size = function(){
  return this.end - this.start;
}



