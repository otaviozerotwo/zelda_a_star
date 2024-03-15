const assignValuesToMatrix = (matrix, coust) => {
  const resultMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = [];
    for (let j = 0; j < matrix[i].length; j++) {
      const color = matrix[i][j];
      const value = coust[color];
      row.push({ color, value: value !== undefined ? value : 0 });
    }
    resultMatrix.push(row);
  }
  return resultMatrix;
};

export default assignValuesToMatrix;