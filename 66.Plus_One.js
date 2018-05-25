
// Given a non - empty array of digits representing a non - negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

//   Example 1:

// Input: [1, 2, 3]
// Output: [1, 2, 4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4, 3, 2, 1]
// Output: [4, 3, 2, 2]
// Explanation: The array represents the integer 4321.


/**
 * @param {number[]} digits
 * @return {number[]}
 */

function plusOne(digits) {
  let carry = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += carry;
    if (i === digits.length - 1) digits[i]++;
    carry = digits[i] > 9
      ? 1
      : 0;
    digits[i] = digits[i] > 9
      ? 0
      : digits[i];
  }
  if (carry) digits.unshift(carry);
  return digits;
}

const d = [1, 2, 3];
const d1 = [9, 9, 9];

console.log(plusOne(d));
console.log(plusOne(d1));