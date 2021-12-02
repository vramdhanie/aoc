const { day02_1, day02_2 } = require("./index");

describe("Day 02 Part 1", () => {
  it("should return 0 for empty input", () => {
    expect(day02_1([])).toBe(0);
  });

  it("should return 150 for given input", () => {
    expect(
      day02_1([
        "forward 5",
        "down 5",
        "forward 8",
        "up 3",
        "down 8",
        "forward 2",
      ])
    ).toBe(150);
  });
});

describe("Day 02 Part 2", () => {
  it("should return 0 for empty input", () => {
    expect(day02_2([])).toBe(0);
  });

  it("should return 900 for given example", () => {
    expect(
      day02_2([
        "forward 5",
        "down 5",
        "forward 8",
        "up 3",
        "down 8",
        "forward 2",
      ])
    ).toBe(900);
  });
});
