const taskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

function loadTasks() {
  chrome.storage.sync.get(["tasks"], (result) => {
    const tasks = result.tasks || [];
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task;
      const del = document.createElement("button");
      del.textContent = "X";
      del.onclick = () => deleteTask(index);
      li.appendChild(del);
      taskList.appendChild(li);
    });
  });
}

function deleteTask(index) {
  chrome.storage.sync.get(["tasks"], (result) => {
    const tasks = result.tasks || [];
    tasks.splice(index, 1);
    chrome.storage.sync.set({ tasks }, () => {
      loadTasks();
      notifyContent();
    });
  });
}

function addTask() {
  const task = taskInput.value.trim();
  if (!task) return;
  chrome.storage.sync.get(["tasks"], (result) => {
    const tasks = result.tasks || [];
    tasks.push(task);
    chrome.storage.sync.set({ tasks }, () => {
      loadTasks();
      notifyContent();
    });
  });
  taskInput.value = "";
}

function notifyContent() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]?.id) {
      chrome.tabs.sendMessage(tabs[0].id, { type: "UPDATE_BADGE" });
    }
  });
}


addTaskBtn.addEventListener("click", addTask);
document.addEventListener("DOMContentLoaded", loadTasks);