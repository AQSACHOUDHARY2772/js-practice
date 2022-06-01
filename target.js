// const numbers = [10, 20, 10, 40, 50, 60, 70];
// for (let i = 0; i < numbers.length; i++) {
//   //   const result = numbers[i];
// //   console.log(numbers[i]);
// return numbers[i]
// }
function find(x) {
  var upar = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] == 2 && x[i] == 3) {
      return true;
    }
  }
}
find([10, 20, 10, 40, 50, 60, 70], 2, 3);
