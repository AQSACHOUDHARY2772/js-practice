const array = [NaN, 0, 15, false, -22, "", undefined, 47, null];
const rearray = [];

array.map((m) => {
  if (m) {
    rearray.push(m);
  }
});
console.log(rearray);
// function remove(arr) {
//   input[(NaN, 0, 15, false, -22, "", undefined, 47, null)];
//   var bin = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == (NaN || 0 || false || "" || undefined || null)) {
//       arr.splice(arr[i], 1);
//     }
//   }
//   console.log(arr); // Expected output [15, -22, 47]
// }
// function bouncer(arr) {
//   var newArr = arr.slice(0);
//   var n = 0;
//   for (var i = 0; i < array.length; i++) {
//     if (
//       array[i] == false ||
//       array[i] == null ||
//       array[i] == 0 ||
//       array[i] == "" ||
//       array[i] == undefined ||
//       Number.isNaN(arr[i]) == true
//     ) {
//       newArr.splice(n, 1);
//     } else n++;
//   }
//   console.log(newArr);
//   return newArr;
// }
