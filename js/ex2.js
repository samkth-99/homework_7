//array containing number from 1 through 10 
const anArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

//An array of odd numbers
const oddNumbers = anArray.filter(x => x % 2 !== 0); 
console.log(`An array of odd numbers: ${oddNumbers}`); 

//An array of numbers divisible by 2 or 5
const divBy2or5 = anArray.filter(y => y % 2 === 0 | y % 5 === 0);
console.log(`An An array of numbers divisible by 2 or 5: ${divBy2or5}`); 

//An array of numbers divisible by 3 squared (square the numbers that are divisible by 3)
const divBy3squared = anArray.filter(z => z % 3 === 0).map(num => num * num)
console.log(`An array of numbers divisible by 3 squared: ${divBy3squared}`); 

//The sum of the following: square the numbers divisible by 5 
const sumDivBy5squared = anArray.filter(n => n % 5 === 0).map(num1 => num1 * num1).reduce((sum, num2) => sum + num2, 0); 
console.log(`The sum of the following: square the numbers divisible by 5: ${sumDivBy5squared}`)


const quest = console.log(anArray.map(x => x * 2).filter(value => value % 2 === 0)); 