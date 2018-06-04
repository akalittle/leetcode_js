// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
// Note:

// You must do this in -place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function moveZeroes(nums) {
  let index = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let n = nums[i];
    if (n !== 0) {
      nums[index++] = n;
    }
  }

  for (index; index < len; index++) {
    nums[index] = 0;
  }
}