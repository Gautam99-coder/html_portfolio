// STORAGE KEY
const STORAGE_KEY = "notesAppData";

// DOM Elements
const form = document.getElementById("noteForm");
const input = document.getElementById("noteInput");
const container = document.getElementById("notesContainer");
const template = document.getElementById("noteTemplate");

// Load saved notes
let notes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

renderNotes();


// Add Note
form.addEventListener("submit", e => {
  e.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  const note = {
    id: Date.now(),
    text
  };

  notes.push(note);
  saveNotes();
  addNoteToDOM(note);
  input.value = "";
});


// Save to LocalStorage
function saveNotes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}


// Render all notes on page load
function renderNotes() {
  container.innerHTML = "";
  notes.forEach(addNoteToDOM);
}


// Add single note to page
function addNoteToDOM(note) {
  const clone = template.content.cloneNode(true);
  const noteDiv = clone.querySelector(".note");

  noteDiv.dataset.id = note.id;
  clone.querySelector(".text").textContent = note.text;

  clone.querySelector(".deleteBtn")
       .addEventListener("click", () => deleteNote(note.id));

  container.appendChild(clone);
}


// Delete note
function deleteNote(id) {
  notes = notes.filter(n => n.id !== id);
  saveNotes();
  renderNotes();
}
