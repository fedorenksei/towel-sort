
// You should implement your task here.

module.exports = towelSort

function towelSort (matrix) {
  if (!Array.isArray(matrix)) return []

  let result = []
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      result.push(...matrix[i]);
      continue
    }
    
    const rowToReverse = matrix[i]
    for (let j = rowToReverse.length - 1; j >= 0; j--) {
      result.push(rowToReverse[j])
    }
  }
  
  return result;
}
