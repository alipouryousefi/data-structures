// Step 1

class Node {
    constructor(value) {
        this.value = value;
        this.next = [];
    }
}


// Step 2

class SkipList {
    constructor() {
        this.head = new Node(-Infinity); // Head node with the smallest possible value
        this.maxLevel = 1; // Current maximum level of the skip list
    }


    // Step 3

    randomLevel() {
        let level = 1;
        while (Math.random() < 0.5 && level < this.maxLevel + 1) {
            level++;
        }
        return level;
    }

    // Step 4

    insert(value) {
        const newNode = new Node(value);
        const update = new Array(this.maxLevel).fill(this.head);

        // Find the nodes to update at each level
        let current = this.head;
        for (let i = this.maxLevel - 1; i >= 0; i--) {
            while (current.next[i] && current.next[i].value < value) {
                current = current.next[i];
            }
            update[i] = current;
        }

        // Determine the level of the new node
        const newLevel = this.randomLevel();
        if (newLevel > this.maxLevel) {
            for (let i = this.maxLevel; i < newLevel; i++) {
                update[i] = this.head;
            }
            this.maxLevel = newLevel;
        }

        // Insert the new node at each level
        for (let i = 0; i < newLevel; i++) {
            newNode.next[i] = update[i].next[i];
            update[i].next[i] = newNode;
        }
    }

    // Step 5

    search(target) {
        let current = this.head;
        for (let i = this.maxLevel - 1; i >= 0; i--) {
            while (current.next[i] && current.next[i].value < target) {
                current = current.next[i];
            }
        }

        if (current.next[0] && current.next[0].value === target) {
            return true;
        }
        return false;
    }

    // Step 6

    delete(target) {
        const update = new Array(this.maxLevel).fill(this.head);

        // Find the nodes to update at each level
        let current = this.head;
        for (let i = this.maxLevel - 1; i >= 0; i--) {
            while (current.next[i] && current.next[i].value < target) {
                current = current.next[i];
            }
            update[i] = current;
        }

        current = current.next[0];

        if (current && current.value === target) {
            for (let i = 0; i < this.maxLevel; i++) {
                if (update[i].next[i] === current) {
                    update[i].next[i] = current.next[i];
                }
            }
            while (this.maxLevel > 1 && this.head.next[this.maxLevel - 1] === null) {
                this.maxLevel--;
            }
            return true;
        }
        return false;
    }

}

// Example usage:
const skipList = new SkipList();
skipList.insert(3);
skipList.insert(1);
skipList.insert(4);
console.log(skipList.search(4)); // Output: true
console.log(skipList.search(2)); // Output: false