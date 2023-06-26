import datas from "./layout";

const menu = document.createElement("div");
menu.classList.add("menu");
menu.classList.add("off");

menu.setAttribute("name", "menu");
datas.appendChild(menu);

//foods
const foods = [
  "Szechuan chicken mcNugget sauce",
  "Mega seeds",
  "Kalaxian Crystals",
  "Strawberry Smiggles",
  "Eyeholes",
  "Yummys Yums",
];

for (let i = 0; i < foods.length; i++) {
  const menuItems = document.createElement("div");
  menuItems.classList.add("menu_Items");
  const menuName = document.createElement("h3");

  //Food
  const menuImg = new Image();
  menuImg.src = require(`../images/foods/${foods[i].replaceAll(" ", "")}.jpg`);
  menuImg.classList.add("menu_Img");

  //Food name
  menuName.classList.add("menu_Name");
  menuName.textContent = foods[i];

  menuItems.appendChild(menuImg);
  menuItems.appendChild(menuName);

  menu.appendChild(menuItems);
}
