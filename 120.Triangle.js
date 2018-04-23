// Given a triangle, find the minimum path sum from top to bottom.Each step you may move to adjacent numbers on the row below.

// For example, given the following triangle
// [
//   [2],
//   [3, 4],
//   [6, 5, 7],
//   [4, 1, 8, 3]
// ]

// The minimum path sum from top to bottom is 11(i.e., 2 + 3 + 5 + 1 = 11).

//   Note:

// Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

function triangle(triangle) {
  const init = triangle[triangle.length - 1];
  const t = triangle.length;
  const faker = [];
  for (const item of triangle) {
    faker.push([]);
  }
  for (const [index, item] of init.entries()) {
    let t = triangle.length - 2;
    let _index = index;
    while (t > -1) {
      let left = _index - 1;
      let right = _index;
      if (left < 0) left = 0;
      if (right > t) right = t;
      const minus = Math.min(triangle[t][left], triangle[t][right]);
      init[index] += minus;
      faker[index].push(minus);
      _index = (minus === triangle[t][left] ? left : right);
      t--;
    }
  }
  console.log(faker);
  return Math.min(...init);
}

const test = [
      [2],
     [3, 4],
    [6, 5, 7],
   [4, 1, 8, 3],
  [1, 2, 3, 4, 5]
];

const r = triangle(test);
console.log(r);