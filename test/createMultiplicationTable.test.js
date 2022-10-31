const createMultiplicationTable = require("../src/createMultiplicationTable");

describe("createMultiplicationTable", () => {
  it("should create a valid table", () => {
    const n = 12;
    const multi_table = createMultiplicationTable(n);
    expect(multi_table.length).toEqual(n + 1);
    expect(multi_table[0].length).toEqual(n + 1);
  });
  it("should have X as a the first Element", () => {
    const n = 13;
    const firstElement = "X";
    const multi_table = createMultiplicationTable(n);
    expect(multi_table[0][0]).toEqual(firstElement);
  });
  it("should have the product of correspoding top and left elements", () => {
    const n = 15;
    const multi_table = createMultiplicationTable(n);
    for (let i = 1; i <= 15; i++) {
      for (let j = 1; j <= 15; j++) {
        expect(multi_table[i][j]).toEqual(
          multi_table[i][0] * multi_table[0][j]
        );
      }
    }
  });
});
