const grid = document.getElementById("grid");

function loadWallpapers(type) {
  grid.innerHTML = "";

  for (let i = 0; i < 9; i++) {


    const randomId = Math.floor(Math.random() * 1000);

    // SIZE BASED ON DEVICE
    const imgUrl =
      type === "phone"
        ? `https://picsum.photos/400/800?random=${randomId}`
        : `https://picsum.photos/800/500?random=${randomId}`;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${imgUrl}" loading="lazy">
      <div class="actions">
        <span class="material-icons">3d_rotation</span>
        <a href="${imgUrl}" target="_blank" download>Download</a>
      </div>
    `;

    grid.appendChild(card);
  }
}


loadWallpapers("phone");
