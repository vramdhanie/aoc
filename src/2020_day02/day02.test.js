const { day02_1, day02_2 } = require("./index");

describe("2020 Day 02 Part 1", () => {
  it("should return 0 for empty input", () => {
    expect(day02_1([])).toBe(0);
  });

  it("should return 0 for all invalid input [1-2 a: wwww]", () => {
    expect(day02_1(["1-2 a: wwww"])).toBe(0);
  });

  it("should return 1 for i valid input ['1-2 a: a']", () => {
    expect(day02_1(["1-2 a: a"])).toBe(1);
  });

  it("should return 2 for ['1-3 a: abcde','1-3 b: cdefg',  '2-9 c: ccccccccc']", () => {
    expect(day02_1(["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"])).toBe(
      2
    );
  });
});

describe.skip("2020 Day 02 Part 2", () => {
  it("should return 0 for empty input", () => {
    expect(day02_2([])).toBe(0);
  });

  it("should return 0 for all invalid input [1-2 a: wwww]", () => {
    expect(day02_2(["1-2 a: wwww"])).toBe(0);
  });

  it("should return 1 for 1 valid input ['1-2 a: a']", () => {
    expect(day02_2(["1-2 a: abb"])).toBe(1);
  });

  it("should return 1 for ['1-3 a: abcde','1-3 b: cdefg',  '2-9 c: ccccccccc']", () => {
    expect(day02_2(["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"])).toBe(
      1
    );
  });
});
