const createMultiplicationTable = require("./createMultiplicationTable.js");
// size of the multiplication table
const n = 12;
const multi_table = createMultiplicationTable(n);
console.log("Multiplication Chart");
console.table(multi_table);
console.log(`multi_table[0][0] = '${multi_table[0][0]}'`);
console.log(`multi_table[12][12] = ${multi_table[12][12]}`);
console.log(`multi_table[6][7] = ${multi_table[6][7]}`);
