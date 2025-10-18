class Stack {
    #arr = null;
    #size = 0;
    #capacity = 0;
  
    constructor(capacity = 4) {
      if (capacity <= 0) capacity = 4;
      this.#capacity = capacity;
      this.#arr = new Uint32Array(capacity);
    }
  
    // Resize internal storage
    #resize(newCap) {
      const tmp = new Uint32Array(newCap);
      for (let i = 0; i < this.#size; ++i) {
        tmp[i] = this.#arr[i];
      }
      this.#arr = tmp;
      this.#capacity = newCap;
    }
  
    // Push element on top
    push(value) {
      if (this.#size === this.#capacity) {
        this.#resize(this.#capacity * 2);
      }
      this.#arr[this.#size++] = value;
    }
  
    // Pop the top element
    pop() {
      if (this.#size === 0) return undefined;
      return this.#arr[--this.#size];
    }
  
    // Peek the top element without removing it
    top() {
      if (this.#size === 0) return undefined;
      return this.#arr[this.#size - 1];
    }
  
    // Return current number of elements
    size() {
      return this.#size;
    }
  
    // Check if stack is empty
    isEmpty() {
      return this.#size === 0;
    }
  
    // Remove all elements
    clear() {
      this.#size = 0;
    }
  
    // Convert to normal JS array (bottom → top)
    toArray() {
      return Array.from(this.#arr.slice(0, this.#size));
    }
  
    // Iterable from top → bottom
    [Symbol.iterator]() {
      let index = this.#size - 1;
      const arr = this.#arr;
      return {
        next() {
          if (index >= 0) return { value: arr[index--], done: false };
          return { value: undefined, done: true };
        },
      };
    }
  }
  
  const st = new Stack();
  st.push(5);
  st.push(10);
  st.push(15);
  
  console.log("Stack contents:", st.toArray()); // [5, 10, 15]
  console.log("Top element:", st.top());        // 15
  console.log("Pop:", st.pop());                // 15
  console.log("After pop:", st.toArray());      // [5, 10]
  console.log("Size:", st.size());              // 2
  console.log("Is empty:", st.isEmpty());       // false
  
  // Iterable demo (from top to bottom)
  console.log("Iterating:");
  for (const value of st) {
    console.log(value);
  }
  