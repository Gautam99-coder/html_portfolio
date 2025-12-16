const themeBtn = document.getElementById("themeBtn");
const body = document.body;
const menu = document.getElementById("menu");
const content = document.getElementById("content");

// Theme toggle
themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// Navigation click (event delegation)
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    document
      .querySelectorAll("nav li")
      .forEach(li => li.classList.remove("active"));

    e.target.classList.add("active");
    content.innerText = `You are viewing ${e.target.innerText}`;
  }
});
