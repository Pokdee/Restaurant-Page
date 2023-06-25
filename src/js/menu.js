import datas from "./layout";
// //Images
// import Food_1 from "../images/foods/SzechuanchickenmcNuggetsauce.png";
// import Megaseeds from "../images/foods/seeds.png";
// import KalaxianCrystals from "../images/foods/crystal.jpg";
// import Strawberrysmiggles from "../images/foods/strawberry.jpg";
// import Eyeholes from "../images/foods/eyehole.jpg";
// import YummysYums from "../images/foods/yummy.jpg";
// //
const menu = document.createElement("div");
menu.classList.add("menu");
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
