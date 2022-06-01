let array = [2, 3, 7, 6, 2, 2, 4, 9];
let oddarray = [];
let evenarray = [];
{
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      oddarray.push(array[i]);
    }
  }

  //   console.log("Even Numbers:");
  for (let j = 0; j < array.length; j++) {
    if (array[j] % 2 == 0) {
      evenarray.push(array[j]);
    }
  }
}
let uniquearray = [...new Set(array)];

console.log(oddarray);

console.log(evenarray);
console.log(uniquearray);
