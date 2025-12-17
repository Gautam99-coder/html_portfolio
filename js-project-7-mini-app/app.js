import { increment, decrement } from "./counter.js";
import { updateUI } from "./ui.js";

document.getElementById("inc").addEventListener("click", () => {
  updateUI(increment());
});

document.getElementById("dec").addEventListener("click", () => {
  updateUI(decrement());
});
