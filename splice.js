// basically splice method use both remove and add items
// splice will return removed items and update the orignall array
const splicearray = ["orange", "banana", "apple", "mango", "kivi"];
const result = splicearray.splice(2, 0, "watermellon");
console.log("result", result);
console.log(("splicearray", splicearray));
