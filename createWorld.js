//משתני גודל עולם המשחק
let worldSize = 40;
const groundHight = worldSize / 2 + 2;
// change world size in the css file
document.documentElement.style.setProperty("--world-size", worldSize);
// לשנות את גודל העולם בקובץ ה- css
const minecraft = document.querySelector("#minecraft");
const world = document.querySelector("#world");

// הכנת מטריצה של 10 * 10 של שמיים:
function createMatrix() {
  for (let row = 0; row < worldSize; row++) {
    worldMatrix[row] = [];
    for (let col = 0; col < worldSize; col++) {
      worldMatrix[row][col] = document.createElement("div");
      worldMatrix[row][col].setAttribute("data-row", row);
      worldMatrix[row][col].setAttribute("data-col", col);
      worldMatrix[row][col].classList.add("tile");

   // לצרף למכולת עולם המשחק
      world.appendChild(worldMatrix[row][col]);
    }
  }
}
// אפס את אריחי העולם למקור

// יצור שמיים
function createSky() {
  for (let row = 0; row < worldSize; row++) {
    for (let col = 0; col < worldSize; col++) {
      worldMatrix[row][col].setAttribute("data-type", "sky");
    }
  }
}
// ייצור עננים
function createCloud() {
  for (let row = 2; row < 5; row++) {
    for (let col = 4; col < 9; col++) {
      worldMatrix[row][col].setAttribute("data-type", "cloud");
    }
  }
  worldMatrix[4][9].setAttribute("data-type", "cloud");
  worldMatrix[4][3].setAttribute("data-type", "cloud");
}

function createCloud1() {
  for (let row = 3; row < 5; row++) {
    for (let col = 20; col < 29; col++) {
      worldMatrix[row][col].setAttribute("data-type", "cloud");
    }
  }
  worldMatrix[4][19].setAttribute("data-type", "cloud");
  worldMatrix[4][29].setAttribute("data-type", "cloud");
}

// יצור אדמה ועשב
function createGround(fromLine) {
  for (let row = fromLine+5; row < worldSize-10; row++) {
    for (let col = 0; col < worldSize; col++) {
      worldMatrix[row][col].setAttribute("data-type", "dirtgrass");
    }
  }
}

function createGround1(fromLine) {
  for (let row = fromLine+6; row < worldSize; row++) {
    for (let col = 0; col < worldSize; col++) {
      worldMatrix[row][col].setAttribute("data-type", "dirt");
    }
  }
}
// יצור סלעים

function createRock1(fromLine) {
  for (let row = fromLine +4, rockWidth = 22; row > 19; row--) {
   for (let col = 19; col < rockWidth; col++)
  worldMatrix[row][col].setAttribute("data-type", "rock");
  }

}
function createRock(fromLine) {
  for (let row = fromLine +4, rockWidth = 4; row >19 ; row--) {
   for (let col = 1; col < rockWidth-1; col++)
  worldMatrix[row][col].setAttribute("data-type", "rock");
  }

}
// ייצור עצים
function createTree(fromLine) {
  for (let row = fromLine-2 ; row < fromLine+5; row++) {
    worldMatrix[row][fromLine -13].setAttribute("data-type", "trunk");
  }
  for (let row = fromLine - 10; row < fromLine -1; row++) {
    for (let col = fromLine-15; col < fromLine-10 ; col++) {
      worldMatrix[row][col].setAttribute("data-type", "leaves");
    }
  }
  for (let row = fromLine+4; row > fromLine-6; row--) {
    worldMatrix[row][fromLine +8].setAttribute("data-type", "trunk");
  }
  for (let row = fromLine -13; row < fromLine-5 ; row++) {
    for (let col = fromLine + 5 ; col < fromLine +12; col++) {
      worldMatrix[row][col].setAttribute("data-type", "leaves");
    }
  }
}

// אפס מלאי
function resetInventory() {
  document
    .querySelectorAll(".inventoryBox")
    .forEach((el) => (el.textContent = 0));
}

function resetWorld(size) {
  resetInventory();
  createSky();
  createCloud();
   createCloud1();
createGround(groundHight);
createGround1(groundHight);
createRock1(groundHight);
  createRock(groundHight);
  createTree(groundHight);
}

// קריאה לפונקציית יצור המשחק הראשון
let worldMatrix = [];
