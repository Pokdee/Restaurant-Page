import datas from "./layout";
const tabCon = document.querySelector(".tab_Con");

const contents = Array.from(datas.children);
// console.log(content);

tabCon.addEventListener("click", (e) => {
  const btnName = e.target.getAttribute("name");
  console.log(btnName);
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].getAttribute("name") === btnName) {
      contents[i].classList.remove("off");
    } else {
      contents[i].classList.add("off");
    }
  }
});
