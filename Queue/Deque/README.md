# 🟠 Deque (Double-Ended Queue)

A **Deque** (Double-Ended Queue) is a linear data structure that allows insertion and removal of elements **from both the front and the back**.  

This makes it a versatile structure used in **sliding window algorithms**, **deque-based buffers**, **task scheduling**, and scenarios where both ends need to be accessed efficiently.

---

## 🧠 Concept Overview

A deque supports the following operations:

- **pushFront(value)**: Insert an element at the front.  
- **pushBack(value)**: Insert an element at the back.  
- **popFront()**: Remove and return the element from the front.  
- **popBack()**: Remove and return the element from the back.  
- **front()**: Peek at the front element without removing it.  
- **back()**: Peek at the back element without removing it.  
- **at(index)**: Access an element by its index (0 = front).  
- **isEmpty()**: Check if the deque has no elements.  
- **size()**: Returns the number of elements currently in the deque.  
- **toArray()**: Returns a shallow copy of all elements from front → back.  
- **[Symbol.iterator]()**: Enables iteration over the deque elements using `for...of`.

---

## ⚙️ Implementation Details

- Written entirely in **JavaScript**.  
- Uses a **bucket-based array mapping** for efficient growth and memory handling.  
- Supports **dynamic resizing** to grow the number of buckets when the deque becomes full.  
- Both **push/pop operations** from front and back are O(1) amortized.  

**Internal logic highlights:**
- Circular buffer inside each bucket to allow efficient O(1) insert/remove.  
- Automatic resize when front or back moves out of the current bucket map.  
- Iterable protocol implemented for easy traversal.  

