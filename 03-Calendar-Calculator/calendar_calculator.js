//insert your pseudocode below
/*
specify the month and yhe day of month in tow variable
the variable of the month will contain a name which will be the name of the month
the second variable will contain a number which is the day of the month
we nedd first to calculate the days of all the months before the name of the month
for every month we define how many days there is before
we check the name of month against the name that we have 
calculate the requested number by adding the day 
*/

//Insert your code below
var MONTH, Day, result;


MONTH = 'february';

Day = 123;
if (MONTH == 'January') {
  result = 0 + Day;
}
if (MONTH == 'february') {
  result = 31 + Day;
}
if (MONTH == 'March') {
  result = 59 + Day;
}
if (MONTH == 'April') {
  result = 90 + Day;
}
if (MONTH == 'May') {
  result = 120 + Day;
}
if (MONTH == 'Jun') {
  result = 150 + Day;
}
if (MONTH == 'July') {
  result = 180 + Day;
}
window.alert(result);