// Buy Button (data attributes)
const buyBtn = document.getElementById("buyBtn");
const buySection = document.querySelector(".buy-section");

buyBtn.addEventListener("click", () => {
  const price = buySection.dataset.price;
  const product = buySection.dataset.product;

  alert(`You selected ${product} for ₹${price}`);
});


// Canvas: draw rating
const canvas = document.getElementById("ratingCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "gold";
ctx.font = "24px Arial";
ctx.fillText("⭐ 4.5 / 5", 80, 100);

ctx.strokeStyle = "orange";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(150, 100, 60, 0, Math.PI * 2);
ctx.stroke();
