// let firstarray = [1, 5, 6, 7];
// let secondarray = [2, 3, 4, 8];
// let result1 = [];

// for (let i = 0; i < firstarray.length; i++) {
//   result1.push(firstarray[i]);
// }
// for (let j = 0; j < secondarray.length; j++) {
//   result1.push(secondarray[j]);
// }
// const result2 = result1.sort();
// // console.log("result1", result1);
// console.log("result2", result2);

var array1 = [1, 5, 6, 7];
var array2 = [2, 3, 4, 8, 6, 8];
var result = [];
var i = l;
var l = Math.min(array1.length, array2.length);

for (i = 0; i < l; i++) {
  result.push(array1[i], array2[i]);
}

console.log(result);
