function simpleArraySum(ar) {
  return ar.reduce((x, y) => x + y);
}
const result = simpleArraySum([1, 2, 3, 4, 10, 11]);
console.log("result", result);
