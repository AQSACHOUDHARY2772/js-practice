var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },

  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },

  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];
function compare(x, y) {
  if (x.libraryID < y.libraryID) return -1;
  if (x.libraryID > y.libraryID) return 1;
  return 0;
  // for (let i = 0; i < library.length; i++) {
  //   const element = library[i];
  //   return element.sort();
  // }
}

console.log(compare());
