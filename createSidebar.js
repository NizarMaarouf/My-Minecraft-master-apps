//ביחרת הפריסות של הקונתינר
const sideToolBar = document.querySelector("#sideToolBar");
const tools = document.querySelector("#tools");
const inventory = document.querySelector("#inventory");

// סרגל הכלים הצדדי
// הוספת כותרת
const sidebarHeader = document.createElement("h1");
sidebarHeader.textContent = "Inventory";
sidebarHeader.classList.add("header");
sideToolBar.insertAdjacentElement("afterbegin", sidebarHeader);

// הוספת כלים
// הוספת כותרת
const toolsHeader = document.createElement("h2");
toolsHeader.textContent = "Tools";
toolsHeader.classList.add("header");
tools.insertAdjacentElement("afterbegin", toolsHeader);
// יצירת כלים
const toolsList = document.createElement("ul");
toolsList.classList.add("toolsList");
tools.insertAdjacentElement("beforeend", toolsList);

function creatTool(name) {
  const element = document.createElement("li");
  element.setAttribute("data-type", name);
  element.textContent = name;
  element.classList.add("toolBox");
  toolsList.appendChild(element);
}
creatTool("axe");
creatTool("pickaxe");
creatTool("shovel");

// הוספת מלאי
// הוסת כותרת
const inventoryHeader = document.createElement("h2");
inventoryHeader.textContent = "Elements";
inventoryHeader.classList.add("header");
inventory.insertAdjacentElement("afterbegin", inventoryHeader);
// יצירת מלאי
const inventoryList = document.createElement("ul");
inventoryList.classList.add("inventoryList");
inventory.insertAdjacentElement("beforeend", inventoryList);

function creatInventoryItem(name) {
  const element = document.createElement("li");
  element.setAttribute("data-type", name);
  element.textContent = 0;
  element.classList.add("inventoryBox");
  inventoryList.appendChild(element);
}
creatInventoryItem("dirtgrass");
creatInventoryItem("dirt");
creatInventoryItem("rock");
creatInventoryItem("leaves");
creatInventoryItem("trunk");

// ליצור כפתור איפוס עולם
const resetButton = document.createElement("button");
resetButton.textContent = "Reset World";
resetButton.classList.add("resetBtn");
sideToolBar.insertAdjacentElement("beforeend", resetButton);

// צור כפתור משחק הפעלה מחדש
const restartGameButton = document.createElement("button");
restartGameButton.textContent = "Restart Game";
restartGameButton.classList.add("restartGameButton");
sideToolBar.insertAdjacentElement("beforeend", restartGameButton);
