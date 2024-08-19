// background.js
chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setIcon({ path: "icon_disabled.png" });
});

chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const tab = await chrome.tabs.get(activeInfo.tabId);
    checkNYTimesArticle(tab);
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        checkNYTimesArticle(tab);
    }
});

async function checkNYTimesArticle(tab) {
    console.log("Checking NYTimes article for tab:", tab.url);
    if (tab.url && tab.url.startsWith("https://www.nytimes.com/")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                if (document.querySelector("article")) {
                    console.log("NYTimes article found");
                    chrome.runtime.sendMessage({ found: true });
                } else {
                    console.log("NYTimes article not found");
                    chrome.runtime.sendMessage({ found: false });
                }
            }
        });
    } else {
        chrome.runtime.sendMessage({ found: false });
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received:", message);
    if (message.found) {
        chrome.action.setIcon({ path: "icon.png" });
    } else {
        chrome.action.setIcon({ path: "icon_disabled.png" });
    }
});
