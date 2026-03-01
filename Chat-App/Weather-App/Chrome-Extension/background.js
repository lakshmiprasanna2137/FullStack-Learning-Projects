let activeTab = null;
let startTime = null;

chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const tab = await chrome.tabs.get(activeInfo.tabId);
    trackTime(tab.url);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
        trackTime(tab.url);
    }
});

function trackTime(url) {
    if (!url) return;

    if (activeTab && startTime) {
        const timeSpent = Date.now() - startTime;

        chrome.storage.local.get(["data"], (result) => {
            let data = result.data || {};

            if (!data[activeTab]) {
                data[activeTab] = 0;
            }

            data[activeTab] += timeSpent;

            chrome.storage.local.set({ data });
        });
    }

    activeTab = new URL(url).hostname;
    startTime = Date.now();
}