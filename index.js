function getPermutation(n, k) {
  const nums = Array.from({ length: n }, (_, i) => i + 1);
  let result = "";
  let count = 0;
  const backtrack = (current) => {
    if (current.length === n) {
      count++;
      if (count === k) result = current.join("");
      return;
    }
    if (count >= k) return;
    for (const num of nums) {
      if (current.includes(num)) continue;
      current.push(num);
      backtrack(current);
      current.pop();
    }
  };
  backtrack([]);
  return result;
}
