const roomList = document.getElementById("roomList");

if (roomList) {
  rooms.forEach(room => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${room.name}</h3>
      <p>${room.desc}</p>
      <p><strong>₹${room.price}/night</strong></p>
      <button class="btn" onclick="bookRoom(${room.id})">Book Now</button>
    `;
    roomList.appendChild(div);
  });
}

function bookRoom(id) {
  localStorage.setItem("selectedRoom", id);
  window.location.href = "booking.html";
}
