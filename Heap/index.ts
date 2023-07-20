class MinHeap {
    private heap: number[];
  
    constructor() {
      this.heap = [];
    }
  
    insert(value: number): void {
      this.heap.push(value);
      this.bubbleUp(this.heap.length - 1);
    }
  
    bubbleUp(index: number): void {
      const parentIndex = Math.floor((index - 1) / 2);
  
      if (index === 0) {
        return;
      }
  
      if (this.heap[index] < this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        this.bubbleUp(parentIndex);
      }
    }
  
    extractMin(): number | undefined {
      const minValue = this.heap[0];
      const lastValue = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = lastValue as number;
        this.bubbleDown(0);
      }
  
      return minValue;
    }
  
    bubbleDown(index: number): void {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let minIndex = index;
  
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
        minIndex = leftChildIndex;
      }
  
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
        minIndex = rightChildIndex;
      }
  
      if (minIndex !== index) {
        [this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];
        this.bubbleDown(minIndex);
      }
    }
  
    isEmpty(): boolean {
      return this.heap.length === 0;
    }
  
    size(): number {
      return this.heap.length;
    }
  }
  
  // Example usage:
  const heap = new MinHeap();
  heap.insert(5);
  heap.insert(10);
  heap.insert(3);
  heap.insert(7);
  
  console.log(heap.extractMin()); // Output: 3
  console.log(heap.extractMin()); // Output: 5
  