type gameMap = (string | undefined)[][];
const map: gameMap = [[]];
let availableNames = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function createMap(width: number, height: number): gameMap {
  for (let x = 0; x < height; x++) {
    map[x] = [];
    for (let y = 0; y < width; y++) {
      map[x][y] = createRandomCell(x, y);
    }
  }
  return map;
}

function createRandomCell(x: number, y: number): string {
  //   If no more names are available, the cell is empty. This also happens 30% of the time anyway
  if (availableNames.length < 1 || Math.floor(Math.random() * 100) > 10)
    return ".";
  //   if there is a planet within 1 space from the current position, this space is empty

  if (
    cellIsEMpty(x - 1, y - 1) &&
    cellIsEMpty(x, y - 1) &&
    cellIsEMpty(x + 1, y - 1) &&
    cellIsEMpty(x - 1, y)
  ) {
    const randomIndex = Math.floor(Math.random() * availableNames.length);
    const cellName = availableNames[randomIndex];
    availableNames =
      availableNames.slice(0, randomIndex) +
      availableNames.slice(randomIndex + 1, availableNames.length);
    return cellName;
  }
  return ".";
}

function cellIsEMpty(x: number, y: number): boolean {
  if (
    x < 0 ||
    y < 0 ||
    x > map.length - 1 ||
    y > map[x].length - 1 ||
    map[x][y] === "."
  )
    return true;
  return false;
}
export default createMap;
