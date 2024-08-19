chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "setActive") {
        chrome.action.setIcon({ path: "icon.png" });
    } else if (message.action === "removeActive") {
        chrome.action.setIcon({ path: "icon_disabled.png" });
    }
});

function checkNYTimesArticle() {
    console.log("checkNYTimesArticle function called");
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTab = tabs[0];
        console.log("Active tab URL:", activeTab.url);
        chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            func: (url) => {
                console.log("Executing script in active tab with URL:", url);
                if (url.startsWith("https://www.nytimes.com/") && document.querySelector("article")) {
                    console.log("NYTimes article found");
                    chrome.runtime.sendMessage({ found: true });
                } else {
                    console.log("NYTimes article not found");
                    chrome.runtime.sendMessage({ found: false });
                }
            },
            args: [activeTab.url]
        });
    });
}

chrome.action.onClicked.addListener((tab) => {
    console.log("chrome.action.onClicked event fired");
    checkNYTimesArticle();
});
