const contain = document.querySelectorAll("div")[0];
contain.setAttribute("class", "container");
const newDiv = document.createElement("div");
const text = document.createElement("div");
contain.append(newDiv);
newDiv.setAttribute("class", "content");
text.setAttribute("class", "text");
const newH = document.createElement("h3");
const newP = document.createElement("p");
newDiv.append(text);
text.append(newH);
text.append(newP);
newH.innerText = "Make your ";
const span = document.createElement("span");
span.innerText = "choice";
newH.append(span);
newH.append(" right now!");
newP.innerText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quisquam doloremque nostrum laboriosam, blanditiis libero corporis nulla a aut?";
const img = document.createElement("img");
contain.append(img);
img.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=60"
);
