let count = 0;
document.querySelectorAll("button").forEach(btn => {
  btn.onclick = () => {
    count++;
    document.getElementById("cartCount").innerText = count;
  };
});
