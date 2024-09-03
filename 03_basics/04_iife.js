// Immediately Invoked Function Expressions (IIFE)


(function chai(){  // normal function
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // adding function inside() the output will be printed and without () the output will be error
// IIFE means writing function inside() and after writing calling the function beside (function) by (); 
// we are using IIFE because there will be problems in global scope due to pollution. so to get rid of pollution in global scope IIFE is used

// when writing two or more IIFE before one should end with ;
( (name) => {   //arrow function
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')// can give paramters here also like regular function.
// IIFE will also run without ; but only last one

// reference
// https://www.youtube.com/watch?v=GAIbn16Iytc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=24