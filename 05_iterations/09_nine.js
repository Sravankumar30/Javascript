const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {  //.reduce is a method contains accumilator and current value inside function value
//     console.log(`acc: ${acc} and currval: ${currval}`);// acc will start with given value and current value will start with declared values
//     return acc + currval  // after adding the result value will be stored in accumilator and the process contionus till the current value is done
// }, 0)// after function we can use , and give any value to accumilator

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)// reduce in arrow function

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);



//reference
// https://www.youtube.com/watch?v=9MfwYoWKKVE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=30