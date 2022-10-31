function createMultiplicationTable(n) {
  const multi_table = [];
  // set the values ignoring first row and first column
  prefillMultiTable(n, multi_table);
  // fix the first row and first column and change incorrectly prefilled values
  fixFirstRowAndColumn(n, multi_table);
  return multi_table;
}

function prefillMultiTable(n, multi_table) {
  for (let i = 0; i <= n; i++) {
    multi_table[i] = [];
    for (let j = 0; j <= n; j++) {
      multi_table[i][j] = i * j;
    }
  }
}

function fixFirstRowAndColumn(n, multi_table) {
  for (let i = 1; i <= n; i++) {
    multi_table[i][0] = i;
    multi_table[0][i] = i;
  }
  // fix the first element to be 'X'
  multi_table[0][0] = "X";
}

module.exports = createMultiplicationTable;