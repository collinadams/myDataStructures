var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.itemsInStorage = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.itemsInStorage] = value;
  this.itemsInStorage++;
};

Stack.prototype.pop = function(){
  if(this.itemsInStorage > 0){
    this.itemsInStorage--;
  }
  var poppedVal = this.storage[this.itemsInStorage];
  delete this.storage[this.itemsInStorage];
  return poppedVal;
};

Stack.prototype.size = function(){
  return this.itemsInStorage;
}