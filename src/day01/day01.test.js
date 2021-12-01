const { day01_1, day01_2 } = require("./index");

describe("Day 01 Part 1", () => {
  it("should return 0 for empty input", () => {
    expect(day01_1([])).toBe(0);
  });

  it("should return 0 for non increasing input [+1, +1, +1]", () => {
    expect(day01_1([+1, +1, +1])).toBe(0);
  });

  it("should return 0 for decreasing input [+3, +2, +1]", () => {
    expect(day01_1([+3, +2, +1])).toBe(0);
  });

  it("should return 0 for non-increasing input for [+3, +3, +2]", () => {
    expect(day01_1([+3, +3, +2])).toBe(0);
  });

  it("should return 2 for increasing after first index [+30, +1, +2, +3]", () => {
    expect(day01_1([+30, +1, +2, +3])).toBe(2);
  });

  it("should return 7 for [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]", () => {
    expect(day01_1([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])).toBe(7);
  });
});

describe("Day 01 Part 2", () => {
  it("should return 0 for empty input", () => {
    expect(day01_2([])).toBe(0);
  });

  it("should return 0 for non increasing input [+1, +1, +1]", () => {
    expect(day01_2([+1, +1, +1])).toBe(0);
  });

  it("should return 0 for decreasing input [+3, +2, +1]", () => {
    expect(day01_2([+3, +2, +1])).toBe(0);
  });

  it("should return 0 for non-increasing input for [+3, +3, +2]", () => {
    expect(day01_2([+3, +3, +2])).toBe(0);
  });

  it("should return 0 for increasing after first index [+30, +1, +2, +3]", () => {
    expect(day01_2([+30, +1, +2, +3])).toBe(0);
  });

  it("should return 5 for [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]", () => {
    expect(day01_2([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])).toBe(5);
  });
});
