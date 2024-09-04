const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}//->empty function  //if the falsy values are inside "" or '' they are truthy value

// if (userEmail.length === 0) {  // check array
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { // check object  object.keys converts object into array so then same way as checking an array
    console.log("Object is empty");
}

// inside browser console
// false == 0    output is true
// false == ''   output is true
// 0 == ''    output is true

// Nullish Coalescing Operator (??): (null) (undefined)

let val1;
// val1 = 5 ?? 10 // takes the first value
// val1 = null ?? 10 // does not take the null
// val1 = undefined ?? 15 // doesn't take the undefined
val1 = null ?? 10 ?? 20// after null/undefined first value is taken


console.log(val1);

// Terniary Operator(?)

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")



// reference
// https://www.youtube.com/watch?v=0P_YvC6Gg0c&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=26