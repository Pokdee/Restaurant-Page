import datas from "./layout";

const contact = document.createElement("div");
contact.classList.add("contact");
contact.classList.add("off");

contact.setAttribute("name", "contact");

datas.appendChild(contact);

const phNo = document.createElement("h3");
phNo.textContent = "☎️ 123 456 789";
phNo.classList.add("phno");

const address = document.createElement("h3");
address.textContent = "🏠 Ratchaprarop soi 12, Bangkok, Thailand";
address.classList.add("address");

const location = new Image();
location.src = require("../images/location.png");
location.classList.add("location");

contact.appendChild(phNo);
contact.appendChild(address);
contact.appendChild(location);
