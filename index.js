function isValidBST(root) {
  const stack = [];
  let inorder = -Infinity;
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.val <= inorder) return false;
    inorder = root.val;
    root = root.right;
  }
  return true;
}
