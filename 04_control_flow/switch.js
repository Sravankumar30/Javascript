// switch case syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break; // if break is not given all the code after the match is found will be excuted  Expect default (default will not be executed)
    case "april":
        console.log("april");
        break;

    default: // if none of the casses match default will be executed
        console.log("default case match");
        break;
}





// reference
// https://www.youtube.com/watch?v=0P_YvC6Gg0c&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=26