# 📦 Dynamic Array 

A **Dynamic Array** is a data structure that provides the functionality of a resizable array. Unlike a static array, it can automatically expand or shrink as elements are added or removed, offering both **flexibility** and **efficient memory use**.

---

## 🧠 Concept Overview

A dynamic array starts with an initial capacity. When the number of elements exceeds that capacity, it automatically allocates a larger buffer and copies the existing elements into it.  
This allows efficient random access like a normal array, while also supporting dynamic growth.

---

## ⚙️ Implementation Details

This implementation is written entirely in **JavaScript**, using an internal resizable buffer to handle storage and resizing efficiently.  

It includes essential operations for managing array elements, capacity, and iteration.

---

## 🚀 Key  Methods

| Method | Description |
|--------|--------------|
| **`push_back(elem)`** | Adds a new element at the end of the array. |
| **`pop_back()`** | Removes and returns the last element. |
| **`at(index)`** | Returns the element at the specified index. |
| **`resize(new_capacity, fill = 0)`** | Changes the array’s capacity, filling extra space with the given value. |
| **`size()`** | Returns the current number of stored elements. |
| **`capacity()`** | Returns the current total capacity. |
| **`clear()`** | Removes all elements without changing capacity. |
| **`toArray()`** | Converts the internal structure to a standard JavaScript array. |
| **`[Symbol.iterator]()`** | Enables iteration using `for...of` loops. |

