const numbers = [1, 2, 3]

//Adding adds the number 4 to the front
const added = [4, ...numbers]
console.log("added:", added);  //added: [4, 1, 2, 3]

//Insert the number 4 BEFORE number 2
const index = numbers.indexOf(2) // find the index of the number 2
const inserted = [...numbers.slice(0, index), 4, ...numbers.slice(index)]
console.log('inserted:', inserted); // inserted: [1, 4, 2, 3]

//Remove the number 2 from the array
const removed = numbers.filter(n => n !== 2) //filer recieves a function and returns an array
console.log('removed:', removed) // removed: (2)[1, 3]

//Updating the index 1 to the number 20
const updated = numbers.map(n => n === 2 ? 20 : n); //.map returns an array, if you had an object in that indicy you would need to use the spread operator to make copy of that object
console.log('updated:', updated); //updated: [1, 20, 3]
