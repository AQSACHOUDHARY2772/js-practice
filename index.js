// function myFunction(x, y) {
//   return x * y;
// }
// // const result = myFunction(5, 10);

// console.log(myFunction(5, 10));

// let a = 10;
// let b = 20;
// let c = 50;

// a = 110;
// a == "110";
// a === 110;
// let d = c * b;
// let e = d * a - b + c;
function sum(x, y) {
  return x + y;
}
const result = sum(2, 3);
console.log("result", result);

// function subtraction(a, b) {
//   return a - b;
// }
// const results = subtraction(20, 10);
// console.log("results", results);

// function division(l, m) {
//   return l / m;
// }
// const fresult = division(10, 0);
// console.log("fresult", fresult);

// var a = {
//   fname: "aqsa",
//   lname: "choudhary",
//   salary: "25000",
//   degree: "ms se",
//   fullname: function () {
//     return a.fname + "" + a.lname;
//   },
// };
// console.log(a.fullname());

// var cars = {
//   name: "honda",
//   color: "black",
//   price: "250000",
//   modal: "2015",
//   valueexist: function () {
//     if (cars.color) {
//       return true;
//     } else {
//       return false;
//     }
//   },
// };
// console.log(cars.valueexist());

// var fruits = {
//   color: "yellow",
//   season: "summera",
//   qyantity: 2,
//   favourite: "yes",
// };
// function fruitssummers(object, key) {
//   if (object[key]) {
//     delete object[key];
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(fruitssummers(fruits, "qyantity"), fruits);

// var laptops = {
//   color: "black",
//   modal: "13",
//   price: "15k",
// };
// function laptopadd(object, key) {
//   if (laptopadd) {
//     object.color = key;
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(laptopadd(laptops, "red"), laptops);

var laptops = {
  color: "black",
  modal: "13",
  price: "15k",
};
function laptopadd(object, key) {
  if (laptopadd) {
    object.type = key;
    return true;
  } else {
    return false;
  }
}
console.log(laptopadd(laptops, "window"), laptops);

// var array = [10, 20, 20, 40];
// var length = array.length;
// console.log("length", length - 1);
// let fruits = ["mango", "apple", "orrange", "kivi"];
// let result = fruits[fruits.length - 1];
// let result = fruits[fruits.length - 1];
// console.log("result", result);
// let fruits = ["apple", "mango", "kivi"];
// console.log("fruits", fruits[1]);
// const result = fruits.length;
// console.log("result", result);
// const result = [fruits.length - 1];
// console.log("result", result);
// const result = fruits;
// console.log("result", result);
// for (let a = 1; a < 10; a++) {
//   console.log("a", a);
// }

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

// document.getElementById("demo").innerHTML = text;

// let fruits = ["orange", "apple", "mango", "kivi"];
// let fruitslength = fruits.length;
// for (let i = 0; i < fruitslength; i++) {
//   console.log(fruits[i]);
// }
// let cars = ["bmw", "honda", "toyota"];
// cars.push("surf");
// console.log("cars", cars);

// let cars = ["bmw", "honda", "toyota"];
// let carpush = cars.length;
// for (let i = 0; i < carpush; i++) {
//   cars.push("surf");
//   console.log("carpush", carpush);
// }
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
// console.log("fruits", fruits);

const array = ["hello", "bye", "byebye"];
function pushfunction(obj, key) {
  const result = obj.push(key);
  return result;
}
console.log(pushfunction(array, "heellohello"), array);
