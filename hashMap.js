import { LinkedList } from './linkedList.js';

class HashMap {
  constructor() {
    this.hashTable = [];
    this.capacity = 16;
    this.initHashTable();
    this.loadFactor = 0.75;
    this.currentLoad = 0;
  }

  initHashTable() {
    for (let index = 0; index < this.capacity; index++) {
      this.hashTable[index] = new LinkedList();
    }
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    if (this.hashTable[index].contains(key)) {
      const indexOfLinkedList = this.hashTable[index].find(key);
      this.hashTable[index].removeAt(indexOfLinkedList);
      this.hashTable[index].insertAt({ key, value }, indexOfLinkedList);
    } else {
      this.hashTable[index].append({ key, value });
      this.currentLoad = this.length() / this.capacity;
    }
    if (this.currentLoad > this.loadFactor) {
      this.capacity = this.capacity * 2;
      let array = [];
      this.hashTable.forEach((bucket) => {
        array = array.concat(bucket.returnValues());
      });
      this.initHashTable();
      array.forEach((pair) => {
        this.set(pair.key, pair.value);
      });
    }
  }

  get(key) {
    const index = this.hash(key);
    if (this.length() === 0) {
      return null;
    }
    if (this.hashTable[index].contains(key)) {
      const indexOfLinkedList = this.hashTable[index].find(key);
      const value = this.hashTable[index].at(indexOfLinkedList).value.value;
      return value;
    } else {
      return null;
    }
  }

  has(key) {
    const index = this.hash(key);
    if (this.length() === 0) {
      return false;
    }
    if (this.hashTable[index].contains(key)) {
      return true;
    } else {
      return false;
    }
  }

  remove(key) {
    const index = this.hash(key);
    if (this.length() === 0) {
      return false;
    }
    if (this.hashTable[index].contains(key)) {
      const indexOfLinkedList = this.hashTable[index].find(key);
      this.hashTable[index].removeAt(indexOfLinkedList);
      this.currentLoad = this.length() / this.capacity;
      return true;
    } else {
      return false;
    }
  }

  length() {
    let counter = 0;
    this.hashTable.forEach((bucket) => {
      counter += bucket.size();
    });
    return counter;
  }

  clear() {
    this.hashTable = [];
    this.capacity = 16;
    this.currentLoad = 0;
    this.initHashTable();
  }

  keys() {
    let array = [];
    this.hashTable.forEach((bucket) => {
      array = array.concat(bucket.returnValues().map((values) => values.key));
    });
    return array;
  }

  values() {
    let array = [];
    this.hashTable.forEach((bucket) => {
      array = array.concat(bucket.returnValues().map((values) => values.value));
    });
    return array;
  }

  entries() {
    let array = [];
    this.hashTable.forEach((bucket) => {
      array = array.concat(
        bucket.returnValues().map((values) => [values.key, values.value])
      );
    });
    return array;
  }
}

export { HashMap };
