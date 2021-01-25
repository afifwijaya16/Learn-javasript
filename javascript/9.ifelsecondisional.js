// conditionals, control flows (if else)
var age = 36;
if((age>=18) &&(age<=35)) {
    status = "target demo";
} else {
    status =" not my audience";
}
console.log(status);

// switch statement
// differentiate between weekday vs weekend
// day 0 -> sunday -> weekend
// day 1 -> monday -> weekday
// day 2 -> tuesday -> weekday
// day 3 -> wednesday -> weekday
// day 4 -> thursday -> weekday
// day 5 -> friday -> weekday
// day 6 -> saturday -> weekend

switch(2) {
    case 0:
        text ="weekend";
        break;
    case 5: 
        text ="weekend";
        break;
    case 6:
        text ="weekend";
        break;
    default:
        text = "weekday"
}
console.log(text);