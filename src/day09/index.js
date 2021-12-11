const { readArray } = require("../utils");
function prepare2DArray(input) {
  return input.map((line) => line.split("").map(Number));
}

function day09_1(grid) {
  let risk = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const c = grid[i][j];
      const up = i > 0 ? grid[i - 1][j] : 10;
      const down = i < grid.length - 1 ? grid[i + 1][j] : 10;
      const left = grid[i][j - 1] ?? 10;
      const right = grid[i][j + 1] ?? 10;
      risk += up > c && down > c && left > c && right > c ? 1 + c : 0;
    }
  }
  return risk;
}

function checkSpot(i, j, grid) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length) {
    return 0;
  }
  const c = grid[i][j];
  if (c === 9) {
    return 0;
  }
  grid[i][j] = 9;
  return (
    1 +
    checkSpot(i - 1, j, grid) +
    checkSpot(i + 1, j, grid) +
    checkSpot(i, j - 1, grid) +
    checkSpot(i, j + 1, grid)
  );
}

function day09_2(grid) {
  const basins = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const size = checkSpot(i, j, grid);
      if (size > 0) {
        basins.push(size);
      }
    }
  }
  console.log(basins);
  return basins
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a * b);
}

function day09Run(fileName) {
  const input = readArray(fileName);
  const grid = prepare2DArray(input);

  console.log(day09_1(grid));
  console.log(day09_2(grid));
}

day09Run("./src/day09/data.txt");

module.exports = { day09_1, day09_2 };
