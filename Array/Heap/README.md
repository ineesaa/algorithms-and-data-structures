# 🟢 Heap (Array based Binary Heap)

A **Heap** is a specialized tree-based data structure that satisfies the **heap property**:  
- In a **min-heap**, the parent is less than or equal to its children.  
- In a **max-heap**, the parent is greater than or equal to its children.  

This implementation uses an **array-based structure**, allowing efficient storage and easy index calculations for parent/child relationships.

---

## 🧠 Concept Overview

A heap is commonly used to implement **priority queues** and is fundamental for algorithms such as **heap sort**.  

Key characteristics of an array-based heap:
- The root element is always the minimum (min-heap) or maximum (max-heap).  
- Left child of index `i` → `2*i + 1`  
- Right child of index `i` → `2*i + 2`  
- Parent of index `i` → `Math.floor((i-1)/2)`  
- Insertion and removal operations maintain the heap property using **heapify up** and **heapify down**.

---

## ⚙️ Implementation Details

This heap is written entirely in **JavaScript** using an internal resizable array.  
It supports a **custom comparator**, allowing easy configuration as a min-heap or max-heap.

### 🔍 Key Methods

| Method | Description |
|--------|-------------|
| **`push(value)`** | Inserts a new element into the heap and restores the heap property. |
| **`pop()`** | Removes and returns the top element (min or max based on comparator). |
| **`peek()`** | Returns the top element without removing it. |
| **`size()`** | Returns the number of elements in the heap. |
| **`isEmpty()`** | Checks whether the heap is empty. |
| **`clear()`** | Removes all elements from the heap. |
| **`toArray()`** | Returns a shallow copy of the internal array. |
| **`[Symbol.iterator]()`** | Enables iteration over the heap elements in array order. |


