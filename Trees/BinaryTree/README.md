# Binary Search Tree (BST) Implementation in JavaScript

This repository contains a **Binary Search Tree (BST)** implemented in **JavaScript**. It allows performing **recursive and iterative insertions**, **search**, **deletion**, as well as **all major tree traversals** and computing tree properties such as **height**, **minimum**, and **maximum values**.

---

## Features

* **Insertion (Insert)**

  * Supports both recursive and iterative approaches for placing new keys in the correct position.
* **Search (Contains)**

  * Supports both recursive and iterative methods to check if a key exists in the tree.
* **Traversals**

  * **Level Order (Breadth-First Search)**
  * **Inorder (Left → Root → Right)**
  * **Preorder (Root → Left → Right)**
  * **Postorder (Left → Right → Root)**
* **Tree Properties**

  * Compute the **height** of the tree (iterative BFS)
  * Find **minimum** and **maximum** values
* **Node Deletion (Remove)**

  * Handles all cases:

    * Leaf node
    * Node with one child
    * Node with two children (using inorder successor)
* **Tree Size**

  * Tracks the total number of nodes in the tree

---

## Time Complexity

| Operation  | Average Case | Worst Case |
| ---------- | ------------ | ---------- |
| Insert     | O(log n)     | O(n)       |
| Search     | O(log n)     | O(n)       |
| Delete     | O(log n)     | O(n)       |
| Traversals | O(n)         | O(n)       |
| Height     | O(n)         | O(n)       |

---

## Space Complexity

* Recursive operations use O(h) stack space, where h is the height of the tree.
* Iterative operations use O(n) space in the worst case for queues or stacks during traversals.
