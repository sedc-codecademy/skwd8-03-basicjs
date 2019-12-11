console.log("The script is connected");

let input = prompt("What day is it?");

switch(input){
    case "Monday":
    case "Wednesday":
        console.log(" YOU ARE IN CLASS! GO GO GO! ");
        break;
    case "Tuesday":
    case "Thursday":
    case "Friday":
    case "Sunday":
        console.log(" Relax dude! You are not in class. Do your homework!");
        break;
    case "Saturday":
        console.log(" Maybe you have a class? Check the schedule!");
        break;
    default:
        console.log(" That is not really a day. Please refresh the page and try again!");
        break;
}


