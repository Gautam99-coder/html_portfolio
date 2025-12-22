const grid = document.getElementById("grid");

function loadWallpapers(type) {
  grid.innerHTML = "";

  for (let i = 0; i < 9; i++) {
    const imgUrl =
      type === "phone"
        ? `https://source.unsplash.com/400x800/?mobile,wallpaper,${Math.random()}`
        : `https://source.unsplash.com/800x500/?laptop,wallpaper,${Math.random()}`;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${imgUrl}">
      <div class="actions">
        <span class="material-icons">3d_rotation</span>
        <a href="${imgUrl}" download>Download</a>
      </div>
    `;

    grid.appendChild(card);
  }
}

loadWallpapers("phone");
