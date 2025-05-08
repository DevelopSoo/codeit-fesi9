// 힙 코드 -> 뭔소리임...?
// 코드를 가져와 -> 직접 하나씩 넣어본다 -> 아하!

class MinHeap {
  private heap: number[] = [];

  constructor() {
    this.heap = [];
  }

  getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  insert(value: number) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index: number) {
    while (index > 0) {
      // 1. 부모랑 비교
      const parentIndex = this.getParentIndex(index);
      // [1, 2, 3, 4, 5, 6, 0]
      // 3 <= 0
      if (this.heap[parentIndex] <= this.heap[index]) break;

      // 3. 부모 값이 더 크면 위치 교환
      // a = 0
      // b = 3
      // [a, b] = [b, a]
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];

      index = parentIndex;
    }
  }

  remove() {
    if (this.heap.length === 0) return null;

    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      if (last !== undefined) {
        this.heap[0] = last;
        this.bubbleDown(0);
      }
    }

    return min;
  }

  bubbleDown(index: number) {
    while (true) {
      // 가정
      // 현재 인덱스의 값이 제일 작아
      let smallest = index;

      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      if (
        leftIndex < this.heap.length &&
        this.heap[leftIndex] < this.heap[smallest]
      ) {
        smallest = leftIndex;
      }

      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex] < this.heap[smallest]
      ) {
        smallest = rightIndex;
      }

      if (smallest === index) break;

      // 6. 값 교환
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];

      index = smallest;
    }
  }
}

const minHeap = new MinHeap();
minHeap.insert(3);
minHeap.insert(0);
minHeap.insert(2);
minHeap.insert(1);
