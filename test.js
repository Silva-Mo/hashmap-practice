import { HashMap } from './hashMap.js';

//TOP testing:

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

test.clear();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('kite', 'blue');
test.set('moon', 'silver');

console.dir(test, { depth: null }); //Should show the hashtable correctly
console.log(test.length()); // should be 13
console.log(test.entries()); // should show all the entries
console.log(test.get('dog')); // should log 'brown'
console.log(test.remove('kite')); // should remove it and return true
console.dir(test, { depth: null }); // should show the hashmape but with less current load
console.log(test.length()); // length should be 12 this time

// PASSED

// AI test:

const aiTest = new HashMap();

// 1. Basic inserts
aiTest.set('dog', 'brown');
aiTest.set('cat', 'black');
aiTest.set('fish', 'gold');
console.log(aiTest.get('dog')); // expect "brown"
console.log(aiTest.get('cat')); // expect "black"
console.log(aiTest.has('fish')); // expect true
console.log(aiTest.length()); // expect 3

// 2. Update existing key
aiTest.set('dog', 'white');
console.log(aiTest.get('dog')); // expect "white"
console.log(aiTest.length()); // expect 3 (not 4)

// 4. Remove key
console.log(aiTest.remove('cat')); // expect true
console.log(aiTest.has('cat')); // expect false
console.log(aiTest.length()); // expect 2

// 5. Clear the map
aiTest.clear();
console.log(aiTest.length()); // expect 0
console.log(aiTest.get('dog')); // expect null

// 6. Resize stress test
for (let i = 0; i < 40; i++) {
  aiTest.set('item' + i, i);
}
console.log(aiTest.length()); // expect 40
console.log(aiTest.capacity); // should be >= 64 (after growth)
console.log(aiTest.get('item25')); // expect 25

// 7. Keys / Values / Entries
console.log(aiTest.keys().length); // expect 40
console.log(aiTest.values().length); // expect 40
console.log(aiTest.entries().length); // expect 40

// 8. Remove half
for (let i = 0; i < 20; i++) {
  aiTest.remove('item' + i);
}
console.log(aiTest.length()); // expect 20
console.log(aiTest.has('item5')); // false
console.log(aiTest.has('item30')); // true

// PASSED
