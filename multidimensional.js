let multidimensionalarray = [
  [1, 3],
  [4, 2],
  [2, 1],
];

let resultmuliti = multidimensionalarray.flat().reduce((x, y) => x + y);

console.log(resultmuliti);
