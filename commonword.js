const array1 = ["dog", "cat", "parrot"];
const array2 = ["lizard", "cat", "rat"];
// function commonword(array1, array2) {
for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    if (array1[i] == array2[j]) {
      console.log(array1[i]);
    }
  }
}

// }
// console.log(commonword(array1, array2));
