const findWaldo = function (names, found) {
  names.forEach((name, index) => {
    if (name === "Waldo") {
      found(index);
    }
  });
}; 

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function (index) {
  console.log("Waldo is located at:", index);
});

//const actionWhenFound = function (index) {
  //console.log("Found him at index:", index);
//};
