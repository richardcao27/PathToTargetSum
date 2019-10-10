const hasPathToSum = function(node, targetSum) {
  // your code here
  function traversePath(node, currentSum, targetSum) {
    currentSum += node.value;
    if (currentSum === targetSum) {
      return true;
    } else if (node.left.value + currentSum < targetSum) {
      traversePath(node.left, currentSum, targetSum);
    } else if (node.right.value + currentSum < targetSum) {
      traversePath(node.right, currentSum, targetSum);
    } else if ()
  }


};

var node = function(value) {
  this.right = null;
  this.left = null;
};

const root = new node(5);
