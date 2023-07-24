const item = document.querySelectorAll("ul")[0];
const newLi = document.createElement("li");
const newLi2 = document.createElement("li");
item.append(newLi);
item.append(newLi2);
newLi.innerText = "Milk Tea";
newLi2.innerText = "Water";

const item1 = document.querySelectorAll("li");
for (const i in item1) {
  if (item1[i].innerText === "Tea") {
    item1[i].remove();
  }
}

const parent = document.querySelectorAll("body")[0];
const newOl = document.createElement("ol");
newOl.innerHTML = item.innerHTML;
parent.replaceChild(newOl, item);

newOl.setAttribute("class", "css");
