class Deque {
    #map = null;
    #bucketSize = 4;
    #bufferSize = 8;
    #frontBlock = 0;
    #frontIndex = 0;
    #backBlock = 0;
    #backIndex = 0;
    #size = 0;
  
    constructor(initialBucketSize = 4, initialBufferSize = 8) {
      this.#bucketSize = initialBucketSize;
      this.#bufferSize = initialBufferSize;
      this.#map = new Array(initialBucketSize).fill(null);
  
      const mid = Math.floor(initialBucketSize / 2);
      this.#backBlock = mid;
      this.#backIndex = 0;
      this.#frontBlock = mid - 1;
      this.#frontIndex = this.#bufferSize - 1;
    }
  
    size() {
      return this.#size;
    }
  
    isEmpty() {
      return this.#size === 0;
    }
  
    // Internal helpers
    #pos(block, index) {
      return { block, index };
    }
  
    #ensureBucket(blockIndex) {
      if (!this.#map[blockIndex]) this.#map[blockIndex] = new Array(this.#bufferSize).fill(null);
    }
  
    #write(pos, value) {
      this.#ensureBucket(pos.block);
      this.#map[pos.block][pos.index] = value;
    }
  
    #read(pos) {
      this.#ensureBucket(pos.block);
      return this.#map[pos.block][pos.index];
    }
  
    #inc(pos) {
      if (pos.index === this.#bufferSize - 1) return this.#pos(pos.block + 1, 0);
      return this.#pos(pos.block, pos.index + 1);
    }
  
    #dec(pos) {
      if (pos.index === 0) return this.#pos(pos.block - 1, this.#bufferSize - 1);
      return this.#pos(pos.block, pos.index - 1);
    }
  
    #resize() {
      const old = this.#map;
      const newLength = old.length * 2;
      const next = new Array(newLength).fill(null);
      const offset = Math.floor((newLength - old.length) / 2);
  
      for (let i = 0; i < old.length; i++) {
        next[i + offset] = old[i];
      }
  
      this.#map = next;
      this.#bucketSize = newLength;
      this.#frontBlock += offset;
      this.#backBlock += offset;
    }
  
    // Public methods
    pushBack(value) {
      if (this.#backBlock >= this.#map.length) this.#resize();
      const pos = this.#pos(this.#backBlock, this.#backIndex);
      this.#write(pos, value);
  
      if (this.#backIndex === this.#bufferSize - 1) {
        this.#backBlock++;
        this.#backIndex = 0;
      } else this.#backIndex++;
  
      this.#size++;
    }
  
    pushFront(value) {
      if (this.#frontBlock < 0) this.#resize();
      const pos = this.#pos(this.#frontBlock, this.#frontIndex);
      this.#write(pos, value);
  
      if (this.#frontIndex === 0) {
        this.#frontBlock--;
        this.#frontIndex = this.#bufferSize - 1;
      } else this.#frontIndex--;
  
      this.#size++;
    }
  
    popFront() {
      if (this.isEmpty()) return null;
      let pos = this.#pos(this.#frontBlock, this.#frontIndex);
      pos = this.#inc(pos);
      const value = this.#read(pos);
      this.#write(pos, null);
      this.#frontBlock = pos.block;
      this.#frontIndex = pos.index;
      this.#size--;
      return value;
    }
  
    popBack() {
      if (this.isEmpty()) return null;
      let pos = this.#pos(this.#backBlock, this.#backIndex);
      pos = this.#dec(pos);
      const value = this.#read(pos);
      this.#write(pos, null);
      this.#backBlock = pos.block;
      this.#backIndex = pos.index;
      this.#size--;
      return value;
    }
  
    front() {
      if (this.isEmpty()) return null;
      let pos = this.#pos(this.#frontBlock, this.#frontIndex);
      pos = this.#inc(pos);
      return this.#read(pos);
    }
  
    back() {
      if (this.isEmpty()) return null;
      let pos = this.#pos(this.#backBlock, this.#backIndex);
      pos = this.#dec(pos);
      return this.#read(pos);
    }
  
    at(index) {
      if (index < 0 || index >= this.#size) throw new Error("Index out of range");
      let pos = this.#pos(this.#frontBlock, this.#frontIndex);
      pos = this.#inc(pos);
      for (let i = 0; i < index; i++) pos = this.#inc(pos);
      return this.#read(pos);
    }
  
    toArray() {
      const res = [];
      let pos = this.#pos(this.#frontBlock, this.#frontIndex);
      pos = this.#inc(pos);
      for (let i = 0; i < this.#size; i++) {
        res.push(this.#read(pos));
        pos = this.#inc(pos);
      }
      return res;
    }
  
    print() {
      for (let i = 0; i < this.#map.length; i++) {
        const bucket = this.#map[i];
        if (!bucket) continue;
        const display = bucket.map(e => (e === null ? '.' : e)).join(' ');
        console.log(`Bucket_${i} : [${display}]`);
      }
    }
  
    *[Symbol.iterator]() {
      let pos = this.#pos(this.#frontBlock, this.#frontIndex);
      pos = this.#inc(pos);
      for (let i = 0; i < this.#size; i++) {
        yield this.#read(pos);
        pos = this.#inc(pos);
      }
    }
  }
 
  const dq = new Deque();
  for (let i = 0; i < 10; i++) {
    dq.pushBack(i);
    dq.pushFront(-i);
  }
  
  console.log("Deque as array:", dq.toArray());
  dq.print();
  console.log("Front:", dq.front());
  console.log("Back:", dq.back());
  console.log("PopFront:", dq.popFront());
  console.log("PopBack:", dq.popBack());
  console.log("Deque after pops:", dq.toArray());
  