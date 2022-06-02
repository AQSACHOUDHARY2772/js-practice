const a = "hello mam"; //helloMam
const b = "one two three"; //oneTwoThree
const result = b.split(" ");
let data = result[0];
for (let i = 1; i < result.length; i++) {
  data = data + result[i][0].toUpperCase() + result[i].slice(1);
}
console.log(data);
