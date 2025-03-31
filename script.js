const ul = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", addItem);
ul.style.width = "50%";

function addItem() {
  const val = input.value;
  input.value = "";

  const li = document.createElement("li");
  const span = document.createElement("span");
  const newBtn = document.createElement("button");
  span.textContent = val;
  newBtn.textContent = "Delete";

  li.setAttribute("style", "display:flex;justify-content:space-between;");

  li.appendChild(span);
  li.appendChild(newBtn);

  ul.appendChild(li);

  newBtn.addEventListener("click", () => {
    li.remove();
  });
}

input.focus();
