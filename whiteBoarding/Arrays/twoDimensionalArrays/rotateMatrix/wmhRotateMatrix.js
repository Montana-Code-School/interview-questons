const flipMatrix = matrix => (
  matrix[0].map((column, index) => (
    matrix.map(row => row[index])
  ))
);

const rotateMatrix = matrix => (
  flipMatrix(matrix.reverse())
);
