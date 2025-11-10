class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    #root;
    #size;

    constructor() {
        this.#root = null;
        this.#size = 0;
    }
    
    // Recursive insert
    insert(value) {
        this.#root = this.#_insertRec(this.#root, value);
    }

    #_insertRec(node, value) {
        if (!node) {
            this.#size++;
            return new TreeNode(value);
        }

        if (value < node.value) {
            node.left = this.#_insertRec(node.left, value);
        } else if (value > node.value) {
            node.right = this.#_insertRec(node.right, value);
        }

        return node;
    }

    insertIter(value) {
        const newNode = new TreeNode(value);
        if (!this.#root) {
            this.#root = newNode;
            this.#size++;
            return;
        }

        let current = this.#root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    this.#size++;
                    break;
                }
                current = current.left;
            } else if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    this.#size++;
                    break;
                }
                current = current.right;
            } else {
                break;
            }
        }
    }

   
    // Recursive contains
    contains(value) {
        return this.#_containsRec(this.#root, value);
    }

    #_containsRec(node, value) {
        if (!node) return false;
        if (node.value === value) return true;
        if (value < node.value) return this.#_containsRec(node.left, value);
        return this.#_containsRec(node.right, value);
    }

    containsIter(value) {
        let current = this.#root;
        while (current) {
            if (value === current.value) return true;
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }

    levelOrder() {
        const result = [];
        if (!this.#root) return result;

        const queue = [this.#root];
        while (queue.length) {
            const node = queue.shift();
            result.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return result;
    }

    inorder() {
        const result = [];
        const stack = [];
        let current = this.#root;

        while (current || stack.length) {
            while (current) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            result.push(current.value);
            current = current.right;
        }
        return result;
    }

    preorder() {
        const result = [];
        if (!this.#root) return result;
        const stack = [this.#root];

        while (stack.length) {
            const node = stack.pop();
            result.push(node.value);
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }
        return result;
    }

    postorder() {
        const result = [];
        if (!this.#root) return result;
        const stack1 = [this.#root];
        const stack2 = [];

        while (stack1.length) {
            const node = stack1.pop();
            stack2.push(node);
            if (node.left) stack1.push(node.left);
            if (node.right) stack1.push(node.right);
        }

        while (stack2.length) {
            result.push(stack2.pop().value);
        }

        return result;
    }

    getHeight() {
        if (!this.#root) return 0;
        const queue = [this.#root];
        let height = 0;

        while (queue.length) {
            let levelSize = queue.length;
            while (levelSize > 0) {
                const node = queue.shift();
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
                levelSize--;
            }
            height++;
        }

        return height;
    }

    findMin() {
        let current = this.#root;
        if (!current) return null;
        while (current.left) current = current.left;
        return current.value;
    }

    findMax() {
        let current = this.#root;
        if (!current) return null;
        while (current.right) current = current.right;
        return current.value;
    }

    remove(value) {
        let parent = null;
        let current = this.#root;
        while (current && current.value !== value) {
            parent = current;
            if (value < current.value) current = current.left;
            else current = current.right;
        }
        if (!current) return false; 
        this.#size--;

        // Case 1: Node has no children
        if (!current.left && !current.right) {
            if (!parent) this.#root = null;
            else if (parent.left === current) parent.left = null;
            else parent.right = null;
            return true;
        }

        // Case 2: Node has one child
        if (!current.left || !current.right) {
            const child = current.left ? current.left : current.right;
            if (!parent) this.#root = child;
            else if (parent.left === current) parent.left = child;
            else parent.right = child;
            return true;
        }

        // Case 3: Node has two children
        let succParent = current;
        let succ = current.right;
        while (succ.left) {
            succParent = succ;
            succ = succ.left;
        }

        current.value = succ.value;

        if (succParent.left === succ) succParent.left = succ.right;
        else succParent.right = succ.right;

        return true;
    }

    size() {
        return this.#size;
    }

    isEmpty() {
        return this.#size === 0;
    }
}
// Example usage

const bst = new BST();

bst.insert(10);
bst.insert(8);
bst.insert(12);
bst.insert(6);
bst.insert(9);
bst.insert(11);
bst.insert(15);


bst.insertIter(7);
bst.insertIter(13);

console.log("Level Order:", bst.levelOrder());
console.log("Inorder:", bst.inorder());
console.log("Preorder:", bst.preorder());
console.log("Postorder:", bst.postorder());
console.log("Height:", bst.getHeight());
console.log("Min:", bst.findMin());
console.log("Max:", bst.findMax());

console.log("Contains 9?", bst.contains(9));
console.log("Contains 20?", bst.containsIter(20));

bst.remove(12);
console.log("After removing 12:", bst.levelOrder());
