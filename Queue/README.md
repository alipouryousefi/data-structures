# Queue

you can implement a queue using an array. A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle, which means that the first element added to the queue will be the first one to be removed.

In the example, we create a Queue class with methods to perform common queue operations:

1. enqueue(element): Adds an element to the back of the queue.
2. dequeue(): Removes and returns the front element from the queue.
3. peek(): Returns the front element of the queue without removing it.
4. isEmpty(): Checks if the queue is empty.
5. size(): Returns the number of elements in the queue.
6. clear(): Clears the queue by removing all elements.

We can then create a new Queue object and perform various queue operations, such as enqueueing elements into the queue, dequeuing elements, checking the front element, checking if the queue is empty, and clearing the queue.

Queues are commonly used in scenarios where tasks need to be processed in the order they arrive, like task scheduling, print spooling, breadth-first search, etc.