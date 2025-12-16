// Global array (app state)
let todos = [];

// Add Todo
function addTodo() {
  const input = document.getElementById("todoInput");
  const text = input.value.trim();

  if (!text) return;

  todos.push(text);
  input.value = "";

  renderTodos();
}

// Render Todos
function renderTodos() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerText = todo;

    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.onclick = () => deleteTodo(index);

    li.appendChild(btn);
    list.appendChild(li);
  });
}

// Delete Todo
function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}
