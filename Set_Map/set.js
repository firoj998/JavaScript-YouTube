// Sets

// Sets are just collections of unique values

//let itemSet  = new Set("Programmer")
let itemSet = new Set([1, 2, 3, 4, 5, 1, 4, 8]);
console.log(itemSet); // print only unique values { 1, 2, 3, 4, 5, 8 }

console.log(itemSet.size);
console.log(itemSet.has(4));
itemSet.add(9);
itemSet.delete(9);
console.log(itemSet);

// Set are iterables


for (let item of itemSet) {
  console.log(item);
}
