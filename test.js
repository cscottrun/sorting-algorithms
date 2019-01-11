const expect = require('chai').expect
const sort = require('./sort')

describe('Quick Sort', () => {
  let arr1 = [4,2,6,8,9,1]
  let arr2 = [12, 11, 13, 5, 6, 7]
  let arr3 = [40,30,55,82,34,44]

  it('should return array sorted', () => {
    expect(sort.quick(arr1)).to.eql(arr1.sort())
    expect(sort.quick(arr2)).to.eql(arr2.sort())
    expect(sort.quick(arr3)).to.eql(arr3.sort())

  })
});

describe('Heap Sort', () => {
  let arr = [4,2,6,8,9,1]
  let arr2 = [9,8,7,5,3,1]
  let arr3 = [40,30,55,82,34,44]

  it('should return array sorted', () => {
    expect(sort.quick(arr)).to.eql(arr.sort())
    expect(sort.quick(arr2)).to.eql(arr2.sort())
    expect(sort.quick(arr3)).to.eql(arr3.sort())

  })
})