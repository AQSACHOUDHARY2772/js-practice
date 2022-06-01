let alice = [3, 2, 3];
let bob = [3, 2, 1];
function comparison(a, b) {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return 2;
  } else if ((a = b)) {
    return "both are equall";
  } else {
    return false;
  }
}
const result = comparison(alice, bob);
console.log("result", result);
