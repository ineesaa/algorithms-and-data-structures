// Node class
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  // Singly Linked List class
  class SList {
    constructor() {
      this.head = null;
    }
  
    // ցուցակը դատարկ է?
    isEmpty() {
      return this.head === null;
    }
  
    // size
    size() {
      let count = 0;
      let current = this.head;
      while (current) {
        count++;
        current = current.next;
      }
      return count;
    }
  
    // clear
    clear() {
      this.head = null;
    }
  
    // front
    front() {
      return this.head ? this.head.data : undefined;
    }
  
    // push_front
    push_front(value) {
      const node = new Node(value, this.head);
      this.head = node;
    }
  
    // push_back
    push_back(value) {
      if (this.head === null) {
        this.head = new Node(value);
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
  
    // pop_front
    pop_front() {
      if (!this.head) return undefined;
      let val = this.head.data;
      this.head = this.head.next;
      return val;
    }
  
    // pop_back
    pop_back() {
      if (!this.head) return undefined;
      if (!this.head.next) {
        let val = this.head.data;
        this.head = null;
        return val;
      }
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      let val = current.next.data;
      current.next = null;
      return val;
    }
  
    // at(index)
    at(index) {
      let current = this.head;
      let i = 0;
      while (current && i < index) {
        current = current.next;
        i++;
      }
      return current ? current.data : undefined;
    }
  
    // insert(index, value)
    insert(index, value) {
      if (index === 0) {
        this.push_front(value);
        return;
      }
      let current = this.head;
      let i = 0;
      while (current && i < index - 1) {
        current = current.next;
        i++;
      }
      if (!current) return;
      current.next = new Node(value, current.next);
    }
  
    // erase(index)
    erase(index) {
      if (!this.head) return undefined;
      if (index === 0) return this.pop_front();
      let current = this.head;
      let i = 0;
      while (current.next && i < index - 1) {
        current = current.next;
        i++;
      }
      if (!current.next) return undefined;
      let val = current.next.data;
      current.next = current.next.next;
      return val;
    }
  
    // remove(value)
    remove(value) {
      let count = 0;
      while (this.head && this.head.data === value) {
        this.head = this.head.next;
        count++;
      }
      let current = this.head;
      while (current && current.next) {
        if (current.next.data === value) {
          current.next = current.next.next;
          count++;
        } else {
          current = current.next;
        }
      }
      return count;
    }
  
    // reverse
    reverse() {
      let prev = null;
      let current = this.head;
      while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      this.head = prev;
    }
  
    // toArray
    toArray() {
      let arr = [];
      let current = this.head;
      while (current) {
        arr.push(current.data);
        current = current.next;
      }
      return arr;
    }
  
    // print
    print() {
      console.log(this.toArray().join(" -> "));
    }
  }
  
  const list = new SList();
  list.push_back(1);
  list.push_back(2);
  list.push_back(3);
  list.print(); 
  
  list.push_front(0);
  list.print(); 
  
  console.log("Size:", list.size());
  
  list.pop_back();
  list.print(); 
  
  list.reverse();
  list.print(); 
  