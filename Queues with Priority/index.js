class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(value, priority) {
        const element = { value, priority };
        let added = false;

        for (let i = 0; i < this.queue.length; i++) {
            if (element.priority < this.queue[i].priority) {
                this.queue.splice(i, 0, element);
                added = true;
                break;
            }
        }

        if (!added) {
            this.queue.push(element);
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        return this.queue.shift().value;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.queue[0].value;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }
}


const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('Task 1', 2);
priorityQueue.enqueue('Task 2', 1);
priorityQueue.enqueue('Task 3', 3);

console.log(priorityQueue.dequeue()); // Output: 'Task 2'
console.log(priorityQueue.dequeue()); // Output: 'Task 1'
console.log(priorityQueue.dequeue()); // Output: 'Task 3'
console.log(priorityQueue.isEmpty()); // Output: true
