function confirmBooking() {
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const roomId = localStorage.getItem("selectedRoom");

  if (!name || !date) return alert("Fill all details");

  const room = rooms.find(r => r.id == roomId);

  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  bookings.push({
    name,
    date,
    room: room.name,
    price: room.price
  });

  localStorage.setItem("bookings", JSON.stringify(bookings));
  alert("Booking Confirmed!");
  window.location.href = "bookings.html";
}
