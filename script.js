const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

// Function to add a new task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete-btn">×</button>
  `;

  taskList.appendChild(taskItem);
  taskInput.value = "";

  // Handle task completion
  taskItem.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  // Handle task deletion
  const deleteBtn = taskItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent task toggle on delete
    taskItem.remove();
  });
});

// Allow pressing "Enter" to add a task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});
