const numbers = [1,5,6,9,10,25];
let index = Math.floor(Math.random()*numbers.length);
let result = index % 2 === 0 ? numbers[index] : -1;
console.log(result);