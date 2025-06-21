// Example: log task count every 30 minutes
chrome.alarms.create("logTasks", { periodInMinutes: 30 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "logTasks") {
    chrome.storage.sync.get("tasks", ({ tasks }) => {
      console.log(`[Quick Todo] You have ${tasks?.length || 0} task(s).`);
    });
  }
});