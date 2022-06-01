// its a how to get a full array
const array1 = ["aqsa", "iqra", "iman", "muzna", "satwat"];
console.log("array1", array1);
// how to get one element/values in array
const array2 = ["aqsa", "muzna", "iqra", "iman", "satwat"];
console.log("array2", array2[0]);
// another way to add element in array
const array3 = ["aqsa", "muzna", "iqra", "iman", "satwat"];
array3[0] = ["sapna"];
console.log("array3", array3);
// length of the array
const array4 = ["aqsa", "iqra", "muzna", "iman", "satwat"];
const result = array4.length;
console.log("result", result);
// accessing the last array element numbers
const array5 = ["aqsa", "iqra", "muzna", "iman", "satwat"];
const result2 = array5.length - 1;
console.log("result2", result2);
// accessing the last array ?????????
const array6 = ["aqsa", "iqra", "muzna", "iman", "satwat"];
const result3 = array6[array6.length - 1];
console.log("result3", result3);
// Adding Array Elements
const array7 = ["aqsa", "iqra", "muzna", "iman", "satwat"];
function pushfunction(obj, key) {
  const result = obj.push(key);
  return result;
}
console.log(pushfunction(array7, "chandani", array7), array7);
// tostring method basically its already invoke but by using tostring method separate the elements with comas
const array8 = ["aqsa", "iqra", "muzna", "iman", "satwat"];
const result5 = array8.toString();
console.log("result5", result5);
// through join method we can use array like string by using ("separator")
const array9 = ["aqsa", "iqra", "muzna", "iman", "satwat"];
const result6 = array9.join("/");
console.log("result6", result6);
// javascrip array method through this we can delete last element from array
const array10 = ["aqsa", "iqra", "muzna", "satwat", "iman"];
const result7 = array10.pop();
console.log("result7", result7, array10);
// pop arrays method  through function
const array11 = ["aqsa", "iqra", "muzna", "satwat", "iman"];
function popfunction(obj, key) {
  const result8 = obj.pop(key);
  return result8;
}

console.log("result8", popfunction(array11, "hello"), array11);
//  shift element remove first element of the array

const array12 = ["aqsa", "iqra", "muzna", "satwat", "iman"];
const result9 = array12.shift();
console.log("result9", result9, array12);
// unshift element add first elemnent of the array ????
const array13 = ["aqsa", "iqra", "muzna", "satwat", "iman"];
const result10 = array13.unshift("atia") && array13;
console.log("result10", result10);
// unshift method through functions ???????
const array14 = ["aqsa", "iqra", "muzna", "satwat", "iman"];
function unshiftfunction(obj, key) {
  const result11 = obj.unshift(key);
  return result11;
}

console.log("result11", unshiftfunction(array14, "attia"), array14);

// delete method in array functions
const array15 = ["aqsa", "iqra", "muzna", "satwat", "iman"];
const result12 = delete array15[0];
console.log("result12", result12);
// concat method in javascript functon ???

const array16 = ["aqsa", "iqra", "muzna", "satwat", "iman"];
const array17 = ["attia", "ayat"];
const array18 = ["yumna", "seemab"];
const result13 = array16.concat(array17, array18);
console.log("result13", result13);
// merging values with array
const array19 = ["aqsa", "iqra", "muzna", "satwat", "iman"];
const result14 = array19.concat("peter");
console.log("result14", result14);
// splice method through this we can add or delete elements in array
// why its showing muzna satwa iman instead of aqsa
const array20 = ["aqsa", "iqra", "muzna", "satwat", "iman"];
const result15 = array20.splice(0, 2);
console.log("result15", result15);
// instead of ??????????
const array21 = ["aqsa", "iqra", "muzna", "satwat", "iman"];
array21.splice("2");
console.log("array21", array21);
// splice method through this we can delete according to our demand
const array22 = ["aqsa", "iqra", "muzna", "satwat", "iman"];
array22.splice(2, 2);
console.log("array22", array22);
// splice method through this we can add elements here is meaning of 1 is that after index 2 delete 1 element and then add two names sidra snobz
const array23 = ["aqsa", "iqra", "muzna", "satwat", "iman"];
array23.splice(2, 1, "sidra", "snobz");
console.log("array23", array23);
// slice method in array (start,end) start means include and end means not include in array we use like this (1,4) (1) means include all elements iqra satwat iman and (4) means discard last one
const array24 = ["aqsa", "iqra", "satwat", "iman", "muzna"];
const result16 = array24.slice(2, 4);
console.log("result16", result16);
// negative slice method in array (start,end) start means include and end means not include in array we use like this (1,4) (1) means include all elements iqra satwat iman and (4) means discard last one
const array25 = ["aqsa", "iqra", "satwat", "iman", "muzna"];
const result17 = array25.slice(-4, -1);
console.log("result17", result17);

// ??
const aqsa = ["a", "b", "c", "d"];
const hello = aqsa.push("e") && aqsa;
console.log("hello", hello);
// ??
// const array21 = ["aqsa", "iqra", "muzna", "satwat", "iman"];
// array21.splice("2");
// console.log("array21", array21);
// flat method basically convert a sub array into a single array
const flatarray = [1, 2, 3, 4, [(9, 8)]];
const flatresult = flatarray.flat();
console.log(flatresult);
// reduce method use to reduce all values in a single value
// const minarray = [1, 2, 3, 4, 5, 6, 7, 0];
// const resultminarray = minarray.Math.min.apply();
// console.log("resultminarray", resultminarray);
