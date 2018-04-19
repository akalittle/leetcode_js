// 1
// Given numRows, generate the first numRows of Pascal's triangle.
// For example, given numRows = 5, Return
// [
//   [1],
//   [1, 1],
//   [1, 2, 1],
//   [1, 3, 3, 1],
//   [1, 4, 6, 4, 1]
// ]

// 2
// Given an index k, return the kth row of the Pascal's triangle.

// For example, given k = 3,
//   Return[1, 3, 3, 1].



function pascalTriangle(rows) {
  if (typeof rows !== "number" || rows <= 0) return [1];
  const triangle = [
    [1]
  ];
  for (let i = 1; i < rows + 1; i++) {
    const t = [1];
    for (let j = 1; j < i; j++) {
      t.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
    }
    t.push(1);
    triangle.push(t);
  }
  return triangle[rows];
}

const r = pascalTriangle(2);
console.log(r);
