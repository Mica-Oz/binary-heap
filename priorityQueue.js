class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    //push
    //compare new node to parent, swap if bigger
    // loop until not bigger
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();

    //   let index = this.values.length-1;
    //   let parentIndex = MAth.floor((index-1)/2)
    //   while (val > this.values[parentIndex]){
    //     let temp = this.values[parentIndex]
    //     this.values[parentIndex] = val
    //     this.values[index] = temp
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const node = this.values[index];
    let nodePri = node.priority;
    while (index > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      let parentPri = parent.priority;
      if (nodePri <= parentPri) break;
      this.values[parentIdx] = node;
      this.values[index] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    //edge case come back to this
    const lastNode = this.values.pop();
    const topNode = this.values[0];
    if (this.values.length > 0) {
      this.values[0] = lastNode;
      this.sinkDown();
    }
    return topNode;
  }
  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (parentIndex < this.values.length) {
      let leftChildIdx = 2 * parentIndex + 1;
      let rightChildIdx = 2 * parentIndex + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChild;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.value[rightChildIdx];
        if (
          (rightChild.priority > element.priority && swap === null) ||
          (swap !== null) & (rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
