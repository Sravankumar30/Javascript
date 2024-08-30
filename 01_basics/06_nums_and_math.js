// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);// tostring converts the type to string type
// console.log(balance.toFixed(2));// toFixed gives the output in max decimals like 2decimals or3,4,5,6,7,8,9,......

// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));// toLocaleString gives the output in readable values and 'en-IN' converts it into indian standed

// // +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));// abs->Absolute value --> converts negtive value to positive value and does not converts positive to negtive  only positive output.
// console.log(Math.round(4.6));// rounds up the value-->if the decimal is below .6 it will print the value before decimal. if the decimal is above .5 it will print the next number
// console.log(Math.ceil(4.2));// in this function whatever the decimal may be from .1 to .9 the output will be the next value 
// console.log(Math.floor(4.9));// in this function whatever the decimal may be from .1 to .9 the output will be the non decimal value 
// console.log(Math.min(4, 3, 6, 8));// this function prints the minimum value in the array.
// console.log(Math.max(4, 3, 6, 8));// this function prints the maximum value in the array.

console.log(Math.random());// gives a random number between 0 and 1.
console.log((Math.random()*10) + 1);// random*10 sends the decimal to other side like 0.46->4.6 and +1 will avoid geting the output 0. and add brackets to (random*10) for BOADMAS
console.log(Math.floor(Math.random()*10) + 1);// using Math.floor will display the output without decimals.

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)// same like above one here insted of 10 we are taking max-min and adding +1 just incase the output should not be 0 and we are adding min value so that output be mor than min value.