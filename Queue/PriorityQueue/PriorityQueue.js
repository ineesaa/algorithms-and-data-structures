class PriorityQueue {
    #heap = [];
    #comparator;
  
    constructor(comparator = (a, b) => a - b) {
      // Default comparator: min-heap
      this.#comparator = comparator;
    }
  
    size() {
      return this.#heap.length;
    }
  
    isEmpty() {
      return this.size() === 0;
    }
  
    peek() {
      return this.isEmpty() ? undefined : this.#heap[0];
    }
  
    clear() {
      this.#heap = [];
    }
  
    // Add element to heap
    push(value) {
      this.#heap.push(value);
      this.#siftUp(this.size() - 1);
    }
  
    // Remove top element (highest priority)
    pop() {
      if (this.isEmpty()) return undefined;
      const top = this.#heap[0];
      const last = this.#heap.pop();
      if (!this.isEmpty()) {
        this.#heap[0] = last;
        this.#siftDown(0);
      }
      return top;
    }
  
    #parent(index) {
      return Math.floor((index - 1) / 2);
    }
  
    #leftChild(index) {
      return index * 2 + 1;
    }
  
    #rightChild(index) {
      return index * 2 + 2;
    }
  
    #siftUp(index) {
      let parent = this.#parent(index);
      while (index > 0 && this.#comparator(this.#heap[index], this.#heap[parent]) < 0) {
        [this.#heap[index], this.#heap[parent]] = [this.#heap[parent], this.#heap[index]];
        index = parent;
        parent = this.#parent(index);
      }
    }
  
    #siftDown(index) {
      const size = this.size();
      while (true) {
        let smallest = index;
        const left = this.#leftChild(index);
        const right = this.#rightChild(index);
  
        if (left < size && this.#comparator(this.#heap[left], this.#heap[smallest]) < 0) {
          smallest = left;
        }
  
        if (right < size && this.#comparator(this.#heap[right], this.#heap[smallest]) < 0) {
          smallest = right;
        }
  
        if (smallest !== index) {
          [this.#heap[index], this.#heap[smallest]] = [this.#heap[smallest], this.#heap[index]];
          index = smallest;
        } else break;
      }
    }
  
    toArray() {
      return [...this.#heap];
    }
  
    *[Symbol.iterator]() {
      for (const val of this.#heap) {
        yield val;
      }
    }
  }

  const pq = new PriorityQueue((a, b) => b - a); // Max-heap
  
  pq.push(5);
  pq.push(10);
  pq.push(3);
  pq.push(7);
  
  console.log("Heap contents:", pq.toArray());
  console.log("Top priority:", pq.peek());
  console.log("Pop top:", pq.pop());
  console.log("After pop:", pq.toArray());
  