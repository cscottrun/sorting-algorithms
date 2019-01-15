
const sort = {
  quick: function (arr) {
    if (arr.length < 2) {
      return arr;
    }
    let pivot = arr[0];
    let small = arr.filter( el => el < pivot);
    console.log('smalls', small)
    let big = arr.filter( el => el > pivot);
    return this.unNest([this.quick(small), pivot, this.quick(big)])
  }, 

  unNest: (arr) => {
    return arr.toString().split(',').filter(el => el!== '').map(el => +el)
  },

  heap: function (arr) {
    this.buildMaxHeap(arr);
    lastEl = arr.length -1;

    while ( lastEl > 0) {
      this.swap ( arr, 0, lastEl);
      this.heapify ( arr, 0, lastEl);
      lastEl --;
    }
    return arr;
  },

  buildMaxHeap: function (arr) {
    let i = Math.floor(arr.length /2 -1)
    while ( i >= 0) {
      this.heapify (arr, i, arr.length);
      i--;
    }
    return arr;
  },

  heapify: function (heap, i, max) {
    while ( i < max) {

      let index = i;
      let leftChild = i * 2 + 1;
      let rightChild = leftChild + 1;

      if (leftChild < max && heap[leftChild] > heap[index]) {
        index = leftChild;
      }

      if (leftChild < max && heap[leftChild] > heap[index]) {
        index = leftChild;
      }

      if (index == i) {
        return;
      }

      this.swap ( heap, i, index);
      i = index;
    };
  },

  swap: function (array, firstItemIndex, lastItemIndex) {
    let temp = array[firstItemIndex];
    array[firstItemIndex] = array[lastItemIndex];
    array[lastItemIndex] = temp;
  },
}

module.exports = sort

