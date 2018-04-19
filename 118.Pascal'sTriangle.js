// Given numRows, generate the first numRows of Pascal's triangle.
// For example, given numRows = 5, Return
// [
//   [1],
//   [1, 1],
//   [1, 2, 1],
//   [1, 3, 3, 1],
//   [1, 4, 6, 4, 1]
// ]


function pascalTriangle(rows) {
  if (typeof rows !== "number" || rows <= 0) return [];
  const triangle = [
    [1]
  ];
  for (let i = 1; i < rows; i++) {
    const t = [1];
    for (let j = 1; j < i; j++) {
      t.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
    }
    t.push(1);
    triangle.push(t);
  }
  return triangle;
}

const r = pascalTriangle(6);
