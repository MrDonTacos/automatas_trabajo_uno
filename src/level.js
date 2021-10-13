import Malo from "./malo";
import Muro from "./muro";

export function buildLevel(game, level) {
  let bricks = [];

  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick === 1) {
        let position = {
          x: 80 * brickIndex,
          y: 75 + 24 * rowIndex
        };
        bricks.push(new Malo(game, position));
      }
      if (brick === 2) {
        let position = {
          x: 80 * brickIndex,
          y: 75 + 24 * rowIndex
        };
        bricks.push(new Muro());
      }
    });
  });

  return bricks;
}

export const level1 = [
  [0, 2, 1, 0, 0, 0, 0, 2, 2, 0],
  [0, 1, 1, 1, 1, 1, 1, 2, 2, 1],
  [0, 1, 1, 1, 2, 1, 1, 1, 2, 1],
  [0, 1, 2, 1, 1, 1, 1, 1, 1, 1]
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
];