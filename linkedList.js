class LinkedList {
  constructor() {
    this._head = null;
  }

  append(value) {
    if (this._head === null) {
      this._head = new Node(value);
    } else {
      let tmp = this._head;
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = new Node(value);
    }
  }

  prepend(value) {
    this._head = new Node(value, this._head);
  }

  size() {
    let counter = 0;
    let tmp = this._head;
    while (tmp !== null) {
      counter++;
      tmp = tmp.nextNode;
    }
    return counter;
  }

  head() {
    return this._head;
  }

  tail() {
    if (this.size() > 1) {
      let tmp = this._head;
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      }
      return tmp;
    } else {
      return this._head;
    }
  }

  at(index) {
    let counter = 0;
    let tmp = this._head;
    while (counter !== index) {
      if (tmp === null) {
        return null;
      }
      counter++;
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  pop() {
    if (this.size() > 2) {
      let prev = this._head;
      let next = this._head.nextNode;
      while (next.nextNode !== null) {
        next = next.nextNode;
        prev = prev.nextNode;
      }
      prev.nextNode = null;
    } else if (this.size() === 2) {
      this._head.nextNode = null;
    } else if (this.size() === 1) {
      this._head = null;
    } else {
      this._head = null;
    }
  }

  contains(value) {
    let tmp = this._head;
    if (tmp === null) {
      return false;
    }
    while (tmp.nextNode !== null) {
      if (tmp.value.key === value) {
        return true;
      }
      tmp = tmp.nextNode;
    }
    if (tmp.value.key === value) {
      return true;
    } else {
      return false;
    }
  }

  find(value) {
    let counter = 0;
    let tmp = this._head;
    if (tmp === null) {
      return null;
    }
    while (tmp.nextNode !== null) {
      if (tmp.value.key === value) {
        return counter;
      }
      counter++;
      tmp = tmp.nextNode;
    }
    if (tmp.value.key === value) {
      return counter;
    } else {
      return null;
    }
  }

  toString() {
    let tmp = this._head;
    if (tmp === null) {
      return 'null';
    }
    let string = `( ${tmp.value} )`;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
      string = string.concat(' -> ', `( ${tmp.value} )`);
    }
    return string + ' -> null';
  }

  returnValues() {
    let tmp = this._head;
    if (tmp === null) {
      let values = [];
      return values;
    }
    let values = [tmp.value];
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
      values.push(tmp.value);
    }
    return values;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
    } else if (index > 0 && !(index >= this.size())) {
      const oldNode = this.at(index);
      const prevNode = this.at(index - 1);
      const newnode = new Node(value, oldNode);
      prevNode.nextNode = newnode;
    } else if (index === this.size()) {
      this.append(value);
    } else {
      console.log('Not possible');
      return;
    }
  }

  removeAt(index) {
    const nextNode = this.at(index + 1);
    const prevNode = this.at(index - 1);
    if (index === 0) {
      this._head = nextNode;
    } else if (index > 0 && !(index >= this.size())) {
      prevNode.nextNode = nextNode;
    } else if (index === this.size() - 1) {
      this.pop();
    } else {
      console.log('Not possible');
      return;
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export { LinkedList };
