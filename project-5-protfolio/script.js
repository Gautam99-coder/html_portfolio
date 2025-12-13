const btn = document.getElementById("themeToggle");
const html = document.documentElement;

btn.addEventListener("click", () => {
  const theme = html.getAttribute("data-theme");
  html.setAttribute("data-theme", theme === "light" ? "dark" : "light");
});
