let expenses = [];

function addExpense() {
  const title = document.getElementById("title").value.trim();
  const amount = Number(document.getElementById("amount").value);

  if (!title || amount <= 0) return;

  expenses = [...expenses, { title, amount }];
  renderExpenses();

  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";
}

function renderExpenses() {
  const list = document.getElementById("expenseList");
  list.innerHTML = "";

  expenses.forEach((exp, index) => {
    const li = document.createElement("li");
    li.innerText = `${exp.title} - ₹${exp.amount}`;

    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.onclick = () => deleteExpense(index);

    li.appendChild(btn);
    list.appendChild(li);
  });

  updateTotal();
}

function deleteExpense(index) {
  expenses = expenses.filter((_, i) => i !== index);
  renderExpenses();
}

function updateTotal() {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  document.getElementById("total").innerText = `Total: ₹${total}`;
}
