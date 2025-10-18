class DArray {
    #size = 0;
    #capacity = 0;
    #arr = null;
  
    constructor(cap = 4) {
      if (cap <= 0) cap = 4;
      this.#capacity = cap;
      this.#arr = new Uint32Array(cap);
    }
  
    // Resize the internal array
    resize(newCap, fill = 0) {
      if (newCap < this.#size) this.#size = newCap;
      const tmp = new Uint32Array(newCap);
  
      for (let i = 0; i < this.#size; ++i) {
        tmp[i] = this.#arr[i];
      }
  
      for (let i = this.#size; i < newCap; ++i) {
        tmp[i] = fill;
      }
  
      this.#capacity = newCap;
      this.#arr = tmp;
    }
  
    // Add element at the end
    push_back(elem) {
      if (this.#size === this.#capacity) {
        const newCap = this.#capacity === 0 ? 1 : this.#capacity * 2;
        this.resize(newCap);
      }
      this.#arr[this.#size++] = elem;
    }
  
    // Remove last element
    pop_back() {
      if (this.#size === 0) return undefined;
      return this.#arr[--this.#size];
    }
  
    // Access element
    at(index) {
      if (index < 0 || index >= this.#size)
        throw new RangeError("Index out of bounds");
      return this.#arr[index];
    }

    // Get size
    size() {
      return this.#size;
    } 

    // Get current capacity
    capacity() {
      return this.#capacity;
    }
  
    // Clear the array
    clear() {
      this.#size = 0;
    }
  
    // Convert to regular array
    toArray() {
      return Array.from(this.#arr.slice(0, this.#size));
    }
  
    // Iterable protocol
    [Symbol.iterator]() {
      let index = 0;
      const arr = this.#arr;
      const length = this.#size;
      return {
        next() {
          if (index < length) return { value: arr[index++], done: false };
          return { value: undefined, done: true };
        },
      };
    }
  }
 
  const arr = new DArray(5);
  arr.push_back(4);
  arr.push_back(10);
  arr.push_back(3);
  arr.push_back(4);
  arr.push_back(5);
  arr.push_back(20);
  
  console.log("Array elements:", ...arr);     // Output: 4 10 3 4 5 20
  console.log("Size:", arr.size());           // Output: 6
  console.log("Capacity:", arr.capacity());   // Output: 10
  console.log("Pop last:", arr.pop_back());   // Output: 20
  console.log("Array now:", ...arr);          // Output: 4 10 3 4 5
  