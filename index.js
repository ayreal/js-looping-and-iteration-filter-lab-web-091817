// Code your solution in this file

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//
// var words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];
//
// var longWords = words.filter(function(word){
//   return word.length > 6;
// });

// Filtered array longWords is ["exuberant", "destruction", "pre

function findMatching(drivers, string) {
  return drivers.filter(function(name) {
    return name.toLowerCase() === string.toLowerCase();
  });
}
// letters = "Sa"
function fuzzyMatch(drivers, string) {
  return drivers.filter(function(name) {
    return name.slice(0, string.length) === string;
  });
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.name.toLowerCase() === string.toLowerCase();
  });
}
