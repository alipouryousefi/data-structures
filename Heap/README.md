# Heap

A heap is a specialized tree-based data structure that satisfies the heap property. The heap property for a max heap is that the value of each node is greater than or equal to the values of its children. For a min heap, it is the opposite: the value of each node is less than or equal to the values of its children.

This example demonstrates a simple implementation of a min heap in JavaScript. The insert() function adds an element to the heap and maintains the heap property by bubbling up the newly added element. The extractMin() function removes and returns the minimum element from the heap and maintains the heap property by bubbling down the new root element.