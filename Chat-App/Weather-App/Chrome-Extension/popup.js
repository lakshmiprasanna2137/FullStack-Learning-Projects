document.getElementById("viewDashboard").addEventListener("click", () => {
    chrome.tabs.create({ url: "dashboard.html" });
});