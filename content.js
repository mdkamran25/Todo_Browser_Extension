// Show a floating badge with task count on every website
function updateBadge() {
  chrome.storage.sync.get("tasks", ({ tasks }) => {
    const taskCount = tasks?.length || 0;

    let badge = document.getElementById("quick-todo-badge");

    if (!badge) {
      badge = document.createElement("div");
      badge.id = "quick-todo-badge";
      document.body.appendChild(badge);
    }

    badge.innerText = `📝 ${taskCount}`;
    badge.style.cssText = `
      position: fixed;
      bottom: 10px;
      right: 10px;
      background: red;
      color: white;
      padding: 6px 10px;
      border-radius: 8px;
      font-size: 14px;
      z-index: 2147483647;
      font-family: sans-serif;
      pointer-events: none;
    `;
  });
}

// Initial badge render
updateBadge();

// Listen for badge update requests
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "UPDATE_BADGE") {
    updateBadge();
  }
});
