const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ //normal function declaration but because it is a callback we don't name it and this function is in array so be take a value inside()
//     console.log(val);
// } )

// coding.forEach( (item) => { ,//arrow function declaration but because it is a callback we don't name it and this function is in array so be take a value inside()
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)// callback a normal function

// coding.forEach( (item, index, arr)=> {  //.forEach has access to more than one values of that array like index and arr(array) for each index.
//     console.log(item, index, arr);
// } )

const myCoding = [      //multiple objects in an array
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )



// reference
// https://www.youtube.com/watch?v=M0YImBHQsWU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=29