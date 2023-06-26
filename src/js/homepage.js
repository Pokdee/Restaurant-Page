import datas from "./layout";
import nobnob from "../images/nobnob.jpg";

const homeCon = document.createElement("div");
homeCon.classList.add("home_contents");
homeCon.setAttribute("name", "home");

datas.appendChild(homeCon);

for (let i = 0; i < 3; i++) {
  let el = document.createElement("div");
  homeCon.appendChild(el);
}
const moto1 = homeCon.children[0];
const imageCon = homeCon.children[1];
const moto2 = homeCon.children[2];
////moto1
moto1.classList.add("moto");
const moto1Html = `<span>Serving Best Food <br />
From All Across From Galaxy<span/>`;

moto1.insertAdjacentHTML("afterbegin", moto1Html);
//image
const image = new Image();
image.src = nobnob;
image.classList.add("img");
imageCon.appendChild(image);

//moto2
moto2.classList.add("moto2");
const moto2Html = `Order Using interdimensional Delivery Service <br />
Visit Us If You Have Portal Gun`;
moto2.insertAdjacentHTML("afterbegin", moto2Html);
