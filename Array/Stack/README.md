# 🧱 Stack Data Structure 

A **Stack** is a linear data structure that follows the **LIFO (Last In, First Out)** principle.  
The last element added to the stack is the first one to be removed, making it ideal for scenarios like **function call management**, **undo operations**, and **expression evaluation**.

---

## 🧠 Concept Overview

A stack allows two primary operations:
- **Push**: Add an element to the top of the stack.  
- **Pop**: Remove the element from the top of the stack.  

Additional features typically include:
- **Peek/Top**: View the top element without removing it.  
- **isEmpty**: Check whether the stack has no elements.  
- **Size**: Determine the current number of elements.

Stacks are commonly implemented using arrays or linked lists.  
In this implementation, a **dynamic array** is used internally to handle storage and automatic resizing efficiently.

---

## ⚙️ Implementation Details

This implementation is written entirely in **JavaScript** and uses an **internal resizable buffer** to store numeric elements efficiently.  

### 🔍 Key Features

| Method | Description |
|--------|-------------|
| **`push(value)`** | Adds an element to the top of the stack, resizing if necessary. |
| **`pop()`** | Removes and returns the top element. Returns `undefined` if empty. |
| **`top()`** | Returns the top element without removing it. |
| **`size()`** | Returns the number of elements currently in the stack. |
| **`isEmpty()`** | Checks whether the stack is empty. |
| **`clear()`** | Removes all elements from the stack. |
| **`toArray()`** | Converts the stack into a standard JavaScript array (bottom → top). |
| **`[Symbol.iterator]()`** | Allows iteration from top to bottom using `for...of`. |



