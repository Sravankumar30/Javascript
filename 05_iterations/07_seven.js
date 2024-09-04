const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers    // using .map,.map,.filter multiple methods is called chaining
                .map((num) => num * 10 )// first one is executed
                .map( (num) => num + 1)// here the num values will be output of previous method
                .filter( (num) => num >= 40)

console.log(newNums);