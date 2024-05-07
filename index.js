function minStack() {
  this.stack = [];
  this.minStack = [];
}
minStack.prototype.push = function (x) {
  this.stack.push(x);
  if (
    this.minStack.length === 0 ||
    x <= this.minStack[this.minStack.length - 1]
  )
    this.minStack.push(x);
};
minStack.prototype.pop = function () {
  if (this.stack.pop() === this.minStack[this.minStack.length - 1])
    this.minStack.pop();
};
minStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};
minStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};
