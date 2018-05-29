// Given an array, rotate the array to the right by k steps, where k is non - negative.

//   Example 1:

// Input: [1, 2, 3, 4, 5, 6, 7] and k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]
// Explanation:
// rotate 1 steps to the right: [7, 1, 2, 3, 4, 5, 6]
// rotate 2 steps to the right: [6, 7, 1, 2, 3, 4, 5]
// rotate 3 steps to the right: [5, 6, 7, 1, 2, 3, 4]
// Example 2:

// Input: [-1, -100, 3, 99] and k = 2
// Output: [3, 99, -1, -100]
// Explanation:
// rotate 1 steps to the right: [99, -1, -100, 3]
// rotate 2 steps to the right: [3, 99, -1, -100]


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


//  k will be larger than nums.length
//  so rotate k % nums.length is enough

function rotate(nums, k) {
  const times = k % nums.length;
  for (let i = 0; i < times; i++) {
    //  pop() returns last of the array 
    //  also the nums.length will be decrease
    const pop = nums.pop();
    nums.unshift(pop);
  }
}

const arr = [1,3,4,5,5,10];
console.log(rotate(arr,5));