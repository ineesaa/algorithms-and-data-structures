class Queue {
    #arr = null;
    #capacity = 0;
    #head = 0;
    #tail = 0;
    #size = 0;
  
    constructor(capacity = 4) {
      if (capacity <= 0) capacity = 4;
      this.#capacity = capacity;
      this.#arr = new Array(capacity);
    }
  
    // Resize internal array
    #resize(newCap) {
      const tmp = new Array(newCap);
      for (let i = 0; i < this.#size; i++) {
        tmp[i] = this.#arr[(this.#head + i) % this.#capacity];
      }
      this.#arr = tmp;
      this.#capacity = newCap;
      this.#head = 0;
      this.#tail = this.#size;
    }
  
    // Add element to the tail
    enqueue(value) {
      if (this.#size === this.#capacity) {
        this.#resize(this.#capacity * 2);
      }
      this.#arr[this.#tail] = value;
      this.#tail = (this.#tail + 1) % this.#capacity;
      this.#size++;
    }
  
    // Remove element from the head
    dequeue() {
      if (this.isEmpty()) return undefined;
      const value = this.#arr[this.#head];
      this.#head = (this.#head + 1) % this.#capacity;
      this.#size--;
      return value;
    }
  
    // Peek at the front element
    peek() {
      return this.isEmpty() ? undefined : this.#arr[this.#head];
    }
  
    size() {
      return this.#size;
    }
  
    isEmpty() {
      return this.#size === 0;
    }
  
    clear() {
      this.#head = 0;
      this.#tail = 0;
      this.#size = 0;
    }
  
    toArray() {
      const res = [];
      for (let i = 0; i < this.#size; i++) {
        res.push(this.#arr[(this.#head + i) % this.#capacity]);
      }
      return res;
    }
  
    [Symbol.iterator]() {
      let index = 0;
      const size = this.#size;
      const arr = this.#arr;
      const head = this.#head;
      const capacity = this.#capacity;
      return {
        next() {
          if (index < size) {
            const value = arr[(head + index) % capacity];
            index++;
            return { value, done: false };
          }
          return { value: undefined, done: true };
        },
      };
    }
  }
 
  const q = new Queue();
  q.enqueue(10);
  q.enqueue(20);
  q.enqueue(30);
  
  console.log("Queue contents:", q.toArray());
  console.log("Peek front:", q.peek());
  console.log("Dequeue:", q.dequeue());
  console.log("After dequeue:", q.toArray());
  console.log("Size:", q.size());
  