const { readArray } = require("../utils");

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function makePoint(s) {
  const [x, y] = s.split(",").map(Number);
  return new Point(x, y);
}

function getBounds(lines) {
  const bounds = {
    minX: Infinity,
    maxX: -Infinity,
    minY: Infinity,
    maxY: -Infinity,
  };
  lines.forEach((line) => {
    bounds.minX = Math.min(bounds.minX, line.start.x, line.end.x);
    bounds.maxX = Math.max(bounds.maxX, line.start.x, line.end.x);
    bounds.minY = Math.min(bounds.minY, line.start.y, line.end.y);
    bounds.maxY = Math.max(bounds.maxY, line.start.y, line.end.y);
  });
  return bounds;
}

function processInput(fileName) {
  const input = readArray(fileName);
  return input.map((line) => {
    const [start, end] = line.split("->");
    return new Line(makePoint(start), makePoint(end));
  });
}

function day05_1(lines, bounds, rows, cols) {
  const count = new Map();
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    let str = "";
    const start = line.start;
    const end = line.end;
    const x = start.x - bounds.minX;
    const y = start.y - bounds.minY;
    const x2 = end.x - bounds.minX;
    const y2 = end.y - bounds.minY;
    if (start.x === end.x) {
      const s = Math.min(y, y2);
      const e = Math.max(y, y2);
      for (let i = s; i <= e; i++) {
        const p = `(${x}, ${i})`;
        if (count.has(p)) {
          count.set(p, count.get(p) + 1);
        } else {
          count.set(p, 1);
        }
      }
    } else if (start.y === end.y) {
      const s = Math.min(x, x2);
      const e = Math.max(x, x2);
      for (let i = s; i <= e; i++) {
        const p = `(${i}, ${y})`;
        if (count.has(p)) {
          count.set(p, count.get(p) + 1);
        } else {
          count.set(p, 1);
        }
      }
    }
  }

  return Array.from(count.values()).filter((v) => v > 1).length;
}

function day05_2(lines) {
  const count = new Map();
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const start = line.start;
    const end = line.end;
    const x = start.x;
    const y = start.y;
    const x2 = end.x;
    const y2 = end.y;
    if (x === x2) {
      const s = Math.min(y, y2);
      const e = Math.max(y, y2);
      for (let i = s; i <= e; i++) {
        const p = `(${x}, ${i})`;
        if (count.has(p)) {
          count.set(p, count.get(p) + 1);
        } else {
          count.set(p, 1);
        }
      }
    } else if (y === y2) {
      const s = Math.min(x, x2);
      const e = Math.max(x, x2);
      for (let i = s; i <= e; i++) {
        const p = `(${i}, ${y})`;
        if (count.has(p)) {
          count.set(p, count.get(p) + 1);
        } else {
          count.set(p, 1);
        }
      }
    } else {
      // diagonal
      const slope = (y2 - y) / (x2 - x);
      const s = Math.min(x, x2);
      const e = Math.max(x, x2);
      let ny = x <= x2 ? y : y2;
      for (let i = s; i <= e; i++) {
        const y = slope * (i - s) + ny;
        const p = `(${i}, ${y})`;
        if (count.has(p)) {
          count.set(p, count.get(p) + 1);
        } else {
          count.set(p, 1);
        }
      }
    }
  }

  return Array.from(count.values()).filter((v) => v > 1).length;
}

function printGrid(grid, rows, cols) {
  let str = "";
  for (let i = 0; i < rows; i++) {
    let line = "";
    for (let j = 0; j < cols; j++) {
      line += grid[j * cols + i] === 0 ? "." : grid[j * cols + i];
    }
    str += `${line}\n`;
  }
  str += "\n";
  console.log(str);
}

function day05Run(fileName) {
  const input = processInput(fileName);

  const straight = input.filter(
    (line) => line.start.x === line.end.x || line.start.y === line.end.y
  );

  let bounds = getBounds(straight);
  let rows = bounds.maxY - bounds.minY + 1;
  let cols = bounds.maxX - bounds.minX + 1;

  console.log(day05_1(straight, bounds, rows, cols));
  console.log(day05_2(input));
}

day05Run("./src/day05/data.txt");

module.exports = { day05_1, day05_2 };
