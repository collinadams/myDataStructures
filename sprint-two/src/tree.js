var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(recipientObj, donorObj){
  for(var prop in donorObj){
    recipientObj[prop] = donorObj[prop];
  }
}



var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  if(this.value === target){
    return true;
  }

  var breadthFirstQueue = [];
  breadthFirstQueue.push({node: this, depth: 0});

  while(currentNode = breadthFirstQueue.shift()){
    if(currentNode.node.value === target){
      return true;
    }
    for(var i = 0; i < currentNode.node.children.length; i++){
      breadthFirstQueue.push({node: currentNode.node.children[i], depth: currentNode.depth + 1});
    }
  }

  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
