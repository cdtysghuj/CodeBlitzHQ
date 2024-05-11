function minDepth(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  let min = Infinity;
  if (root.left) min = Math.min(min, minDepth(root.left));
  if (root.right) min = Math.min(min, minDepth(root.right));
  return min + 1;
}
