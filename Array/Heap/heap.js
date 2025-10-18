class Heap {
    #heap = [];
    #comparator = null;
  
    constructor(comparator = (a, b) => a - b) {
      this.#heap = [];
      this.#comparator = comparator;
    }
  
    // Swap elements
    #swap(i, j) {
      [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]];
    }
  
    // Heapify up (after insertion)  
    #heapifyUp(index) {
      let parent = Math.floor((index - 1) / 2);
      while (
        index > 0 &&
        this.#comparator(this.#heap[index], this.#heap[parent]) < 0
      ) {
        this.#swap(index, parent);
        index = parent;
        parent = Math.floor((index - 1) / 2);
      }
    }
  
    // Heapify down (after removal)
    #heapifyDown(index) {
      const n = this.#heap.length;
      while (true) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index;
  
        if (
          left < n &&
          this.#comparator(this.#heap[left], this.#heap[smallest]) < 0
        ) smallest = left;
  
        if (
          right < n &&
          this.#comparator(this.#heap[right], this.#heap[smallest]) < 0
        ) smallest = right;
        if (smallest === index) break;
  
        this.#swap(index, smallest);
        index = smallest;
      }
    }
  
    // Insert value
    push(value) {
      this.#heap.push(value);
      this.#heapifyUp(this.#heap.length - 1);
    }
  
    // Remove top element
    pop() {
      if (this.isEmpty()) return undefined;
      const top = this.#heap[0];
      const last = this.#heap.pop();
      if (!this.isEmpty()) {
        this.#heap[0] = last;
        this.#heapifyDown(0);
      }
      return top;
    }
  
    // Peek top element
    peek() {
      return this.isEmpty() ? undefined : this.#heap[0];
    }
  
    size() {
      return this.#heap.length;
    }
  
    isEmpty() {
      return this.#heap.length === 0;
    }
  
    clear() {
      this.#heap = [];
    }
  
    toArray() {
      return [...this.#heap];
    }
  
    [Symbol.iterator]() {
      let index = 0;
      const arr = this.#heap;
      return {
        next() {
          if (index < arr.length) return { value: arr[index++], done: false };
          return { value: undefined, done: true };
        },
      };
    }
  }

  const heap = new Heap(); // min-heap by default
  heap.push(5);
  heap.push(3);
  heap.push(8);
  heap.push(1);
  
  console.log("Heap elements:", heap.toArray());
  console.log("Top element:", heap.peek());
  console.log("Pop top:", heap.pop());
  console.log("After pop:", heap.toArray());
  