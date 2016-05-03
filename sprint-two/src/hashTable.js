var HashTable = function(){
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i) || [];
  for(var j = 0; j < bucket.length; j++){
    var pair = bucket[j];
    if (pair[0] === k){
      pair[1] === v;
      return;
    }
  }
  bucket.push([k, v]);
  this._storage.set(i, bucket);
  this._size++;
  if(this._size > this._limit * 0.75){
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  for(var n = 0; n < bucket.length; n++){
    var pair = bucket[n];
    if(pair[0] === k){
      return pair[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for(var m = 0; m < bucket.length; m++){
    var pair = bucket[m];
    if(pair[0] === k){
      bucket.splice(m, 1);
      this._size--;
      if(this._size < this._limit * 0.25){
        this.resize(Math.floor(this._limit/2));
      }
      return pair[1];
    }
  }
  return null;
};

HashTable.prototype.resize = function(newLimit){
  var oldHashTable = this._storage;
  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  var capturedThis = this;
  oldHashTable.each(function(bucket, index, storage){
    if(!bucket){
      return;
    }
    for(var n = 0; n < bucket.length; n++){
      var pair = bucket[n];
      capturedThis.insert(pair[0], pair[1]);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
