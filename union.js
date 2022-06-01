// const a = [];
// const b = [];
// function union(x, y) {
//   for (let i = 0; i < x; i++) {
//     const result = x[i].concat(y);
//     console.log(result);
//   }
// }
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
const a = [1, 2, 3];
const b = [100, 2, 1, 10];
const result = a.concat(b);
let uniquearray = [...new Set(result)];
console.log(uniquearray);
// console.log(result);
