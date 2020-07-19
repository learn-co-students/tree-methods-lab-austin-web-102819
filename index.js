function inOrder(currentNode) {
  if (currentNode.left) {
    inOrder(currentNode.left);
  }
  console.log(currentNode.data);
  if (currentNode.right) {
    inOrder(currentNode.right);
  }
}
function findOrAdd(node, newNode) {
  let current = node;
  if (current.data > newNode.data) {
    if (current.left) {
      current = current.left;
      return findOrAdd(current, newNode);
    } else {
      current.left = newNode;
      return current;
    }
  } else if (current.data === newNode.data) {
    return true;
  } else if (current.data < newNode.data) {
    if (current.right) {
      current = current.right;
      return findOrAdd(current, newNode);
    } else {
      current.right = newNode;
      return current;
    }
  }
}
function max(node) {
  if (node.right) {
    return max(node.right);
  } else {
    return node;
  }
}
function min(currentNode) {
  if (currentNode.left) {
    return min(currentNode.left);
  } else {
    return currentNode;
  }
}
