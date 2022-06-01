// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i += arr) {
//   const slicepart = arr.slice(i, i + arr);
//   console.log(slicepart);
// }
function chunkarray(arr, val) {
  var finalarray = [];
  for (let i = 0; i < arr.length; i = i + val) {
    finalarray.push(arr.slice(i, val + i));
  }
  return finalarray;
}

console.log(chunkarray([1, 2, 3, 4, 5], 2));
