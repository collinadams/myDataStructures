

var Graph = function(){
  this._nodes = {};
};

Graph.prototype.addNode = function(node){
  this._nodes[node] = {edges: []};
};

Graph.prototype.contains = function(node){
  return !!(this._nodes[node]);
};

Graph.prototype.removeNode = function(node){
  var removedNode = this._nodes[node];
  delete this._nodes[node];
  for(var prop in this._nodes){
    if(this.hasEdge(this._nodes[prop], node)){
      this.removeEdge(this._nodes[prop], node);
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return 0 <= this._nodes[fromNode].edges.indexOf(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if(this._nodes[fromNode] === undefined || this._nodes[toNode] === undefined){
    return null;
  }
  if(this._nodes[fromNode].edges.indexOf(toNode) === -1){
    this._nodes[fromNode].edges.push(toNode); 
  }
  if(this._nodes[toNode].edges.indexOf(fromNode) === -1){
    this._nodes[toNode].edges.push(fromNode);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var indexToRemove = this._nodes[fromNode].edges.indexOf(toNode);
  this._nodes[fromNode].edges.splice(indexToRemove, 1);
  indexToRemove = this._nodes[toNode].edges.indexOf(fromNode);
  this._nodes[toNode].edges.splice(indexToRemove, 1);
};

Graph.prototype.forEachNode = function(cb){
  for(var prop in this._nodes){
    cb(prop);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



