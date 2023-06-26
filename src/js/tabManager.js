import datas from "./layout";
const tabCon = document.querySelector(".tab_Con");

const contents = Array.from(datas.children);
const btns = Array.from(tabCon.children);
// console.log(content);

tabCon.addEventListener("click", (e) => {
  const btn = e.target;
  const btnName = e.target.getAttribute("name");
  for (let i = 0; i < btns.length; i++) {
    if (btns[i].classList.contains("clicked")) {
      btns[i].classList.remove("clicked");
    }
  }
  if (!btn.classList.contains("clicked")) {
    btn.classList.add("clicked");
  }
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].getAttribute("name") === btnName) {
      contents[i].classList.remove("off");
    } else {
      contents[i].classList.add("off");
    }
  }
});
