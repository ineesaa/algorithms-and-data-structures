# 🔺 Priority Queue (Binary Heap)

A **Priority Queue** is a data structure that stores elements based on **priority**, rather than insertion order.  
Elements with **higher priority** (determined by a comparator) are removed first.  

Priority queues are commonly used in:
- Task scheduling  
- Event-driven simulations  
- Dijkstra's shortest path algorithm  
- Heap sort and other greedy algorithms

---

## 🧠 Concept Overview

A priority queue supports the following operations:

- **push(value)**: Add an element with a given priority.  
- **pop()**: Remove and return the element with the highest priority.  
- **peek()**: View the top-priority element without removing it.  
- **isEmpty()**: Check if the queue has no elements.  
- **size()**: Return the number of elements.  
- **clear()**: Remove all elements.  

**Additional features:**
- Supports **custom comparator functions** for min-heap, max-heap, or custom priorities.  
- Iterable via `[Symbol.iterator]()` and `toArray()` for inspection.

---

## ⚙️ Implementation Details

- Written entirely in **JavaScript**.  
- Uses an **array-based binary heap** for efficient O(log n) insertion and removal.  
- Customizable **comparator** allows flexible priority rules.  

**Internal logic highlights:**
- `#siftUp` maintains heap property after insertion.  
- `#siftDown` restores heap property after removal.  
- Binary heap stored internally as an array for cache efficiency and simplicity.


