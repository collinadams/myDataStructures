var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newInstance = Object.create(queueMethods);
  newInstance.storage = {};
  newInstance.start = -1;
  newInstance.end = -1;

  return newInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.end++;
  this.storage[this.end] = value;
};

queueMethods.dequeue = function(){
  if(this.size() > 0){
    this.start++;
  }
  var dequeuedVal = this.storage[this.start];
  delete this.storage[this.start];
  return dequeuedVal;
};

queueMethods.size = function(){
  return this.end - this.start;
}


