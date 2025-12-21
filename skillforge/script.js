const addSkillBtn = document.getElementById("addSkillBtn");

addSkillBtn.addEventListener("click", function () {
  const name = document.getElementById("skillName").value.trim();
  const target = Number(document.getElementById("dailyTarget").value);

  if (name === "" || target <= 0) {
    alert("Enter valid skill and target");
    return;
  }

  skills.push({
    name: name,
    dailyTarget: target,
    totalMinutes: 0
  });

  saveSkills();
  renderSkills();
});

let skills = JSON.parse(localStorage.getItem("skills")) || [];

function saveSkills() {
  localStorage.setItem("skills", JSON.stringify(skills));
}

function renderSkills() {
  const skillBox = document.getElementById("skills");
  const select = document.getElementById("skillSelect");

  skillBox.innerHTML = "";
  select.innerHTML = "";

  skills.forEach(function (skill, index) {
    // Skill Card
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${skill.name}</h3>
      <p>Total Time: ${skill.totalMinutes} min</p>
      <p>Daily Target: ${skill.dailyTarget} min</p>
    `;
    skillBox.appendChild(div);

    // Dropdown option
    const option = document.createElement("option");
    option.value = index;
    option.textContent = skill.name;
    select.appendChild(option);
  });
}

renderSkills();
