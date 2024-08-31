const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)// takes dc as a single element which we does not need. total elements in marvel heroes are 4

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)// takes dc ad individual elements. so total elements in allheroes are 6
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]// spread(...) syntax also works similar to .concat() but this is esaier espeasily when there are more arrays

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]// arrays inside an array

// const real_another_array = another_array.flat(Infinity)// .flat() removes the multiple arrays and prints it in a single array (infinity) can give any value from 1 - infinity for number of arrays in array
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))// .isArray here we are asking if it is an array or not
// console.log(Array.from("Hitesh"))// .from converts some datatype to array like string,objects,etc
// console.log(Array.from({name: "hitesh"})) // interesting // gives empty array

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));// .of converts multiple variables into single array

// reference
// https://www.youtube.com/watch?v=m6azhgyCi-k&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=15