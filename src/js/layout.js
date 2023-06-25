const content = document.getElementById("content");
const header = document.createElement("header");
const heading = document.createElement("span");
const tabCon = document.createElement("div");
const footer = document.createElement("footer");
const footText = document.createElement("span");
const body = document.querySelector("body");
// datas to show contents
const datas = document.createElement("datas");
export default datas;

//Heading part
content.appendChild(header);

header.classList.add("header");
header.appendChild(heading);
heading.textContent = "SHONEY'S";
heading.classList.add("header_heading");

//tabs
content.appendChild(tabCon);
tabCon.classList.add("tab_Con");
for (let i = 0; i < 3; i++) {
  let button = document.createElement("button");
  button.classList.add("btn");
  tabCon.appendChild(button);
}
tabCon.firstChild.textContent = "Home";
tabCon.children[1].textContent = "Menu";
tabCon.children[2].textContent = "Contact";

//datas
content.appendChild(datas);

//footer
body.append(footer);
footer.classList.add("foot");
footer.appendChild(footText);
footText.textContent = "Copyright Shoney's";
footText.classList.add("foot-text");
