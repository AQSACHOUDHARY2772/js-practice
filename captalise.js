// const string = "hiitsjavascript";
// const result = string[0].toLocaleUpperCase();
// console.log(result);
const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");
console.log(words);

for (let i = 0; i < words.length; i++) {
  console.log(words[i]);
  words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

words.join(" ");
console.log(words);
