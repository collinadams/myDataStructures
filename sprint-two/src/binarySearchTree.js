var BinarySearchTree = function(value){
  var binaryTree = Object.create(BinarySearchTreePrototype);

  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;

  return binaryTree;
};

var BinarySearchTreePrototype = {};

BinarySearchTreePrototype.insert = function(value){
  if(this.value > value){
    if(!this.left){
      this.left = BinarySearchTree(value);
    }else{
      this.left.insert(value);
    }
  }else if(this.value < value){
    if(!this.right){
      this.right = BinarySearchTree(value);
    }else{
      this.right.insert(value);
    }
  }else{
    return 'The tree already contains this value';
  }
};

BinarySearchTreePrototype.contains = function(target){
  if(this.value === target){
    return true;
  }else if(target < this.value){
    if(!this.left){
      return false;
    }else{
      return this.left.contains(target);
    }
  }else if(target > this.value){
    if(!this.right){
      return false;
    }else{
      return this.right.contains(target)
    }
  }else{
    return false;
  }
};

BinarySearchTreePrototype.depthFirstLog = function(callback){
  callback(this.value);

  if(this.left){
    this.left.depthFirstLog(callback);
  }
  if(this.right){
    this.right.depthFirstLog(callback);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
