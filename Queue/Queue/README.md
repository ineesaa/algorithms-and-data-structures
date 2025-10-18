# 🟡 Queue (FIFO, Circular Buffer)

A **Queue** is a linear data structure that follows the **FIFO (First-In, First-Out)** principle.  
The first element added to the queue is the first one to be removed. Queues are commonly used in **task scheduling**, **buffering**, **event handling**, and other scenarios where order must be preserved.

---

## 🧠 Concept Overview

A queue allows two primary operations:
- **Enqueue**: Add an element to the rear of the queue.  
- **Dequeue**: Remove an element from the front of the queue.  

Additional features include:
- **Peek**: View the front element without removing it.  
- **isEmpty**: Check whether the queue has any elements.  
- **Size**: Get the number of elements currently in the queue.  

This implementation uses a **circular buffer** to allow efficient O(1) enqueue and dequeue operations and supports **dynamic resizing** when full.

---

## ⚙️ Implementation Details

This queue is written entirely in **JavaScript** using an internal array as a circular buffer.  

### 🔍 Key Methods

| Method | Description |
|--------|-------------|
| **`enqueue(value)`** | Adds an element to the rear of the queue. Resizes if the internal array is full. |
| **`dequeue()`** | Removes and returns the front element. Returns `undefined` if empty. |
| **`peek()`** | Returns the front element without removing it. |
| **`size()`** | Returns the number of elements currently in the queue. |
| **`isEmpty()`** | Checks whether the queue is empty. |
| **`clear()`** | Removes all elements from the queue. |
| **`toArray()`** | Returns a shallow copy of the queue elements in order (front → rear). |
| **`[Symbol.iterator]()`** | Allows iteration over the queue elements from front to rear using `for...of`. |

