//binary heap is likke binary tree but
//binary max heap has largest number as root and all children are less than parents
//binary max heap has smallest number as root and all children are more than their parents

//implemented through array
//children of parent n
//left child is 2n+1
//right child is 2n+2

//parent of child n
//(n-1)/2 floored

//

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    //push
    //compare new node to parent, swap if bigger
    // loop until not bigger
    this.values.push(val);
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
    const element = this.values[index];
    while (index > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[index] = parent;
      idx = parentIdx;
    }
  }
  extractMax() {
    //edge case come back to this
    const lastElement = this.values.pop();
    const top = this.values[0];
    if (this.values.length > 0) {
      this.values[0] = lastElement;
      this.sinkDown();
    }
    return top;
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
        if (leftChild > element) {
          swap = leftChild;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.value[rightChildIdx];
        if (
          (rightChild > element && swap === null) ||
          (swap !== null) & (rightChild > leftChild)
        ) {
          swap = rightChild;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
