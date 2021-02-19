//insert your pseudocode below
/*
create a variable to to store the number
 let the users to input  number 
 and then prints the number stored
*/

//insert your code below
var num,;

function listsGetSortCompare(type, direction) {
  var compareFuncs = {
    "NUMERIC": function(a, b) {
        return Number(a) - Number(b); },
    "TEXT": function(a, b) {
        return a.toString() > b.toString() ? 1 : -1; },
    "IGNORE_CASE": function(a, b) {
        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },
  };
  var compare = compareFuncs[type];
  return function(a, b) { return compare(a, b) * direction; }
}
num = [3, 4, 5];
window.alert(num.slice().sort(listsGetSortCompare("NUMERIC", 1)));