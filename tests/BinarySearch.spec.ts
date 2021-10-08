import { search } from '../src/BinarySearch'
import { expect } from 'chai'

/**
 * @name TEST 704. Binary Search
 * @description Testing Binary Search
 * @author davidvalorwork@gmail.com
 * @param nums Array of number for search
 * @param target What I need to found
 */
describe('704. Binary Search', function() {
  it('First', function(done: Function) {
    const result = search([-1,0,3,5,9,12], 9)
    expect(result).to.equal(0)
    done()
  })
})