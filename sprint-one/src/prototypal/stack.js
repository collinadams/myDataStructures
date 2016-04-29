var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);

  obj.storage = {};
  obj.itemsInStorage = 0;

  return obj;

};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.itemsInStorage] = value;
  this.itemsInStorage++;
};

stackMethods.pop = function(){
  if(this.itemsInStorage > 0){
    this.itemsInStorage--;
  }
  var poppedVal = this.storage[this.itemsInStorage];
  delete this.storage[this.itemsInStorage];
  return poppedVal;
}

stackMethods.size = function(){
  return this.itemsInStorage;
}
