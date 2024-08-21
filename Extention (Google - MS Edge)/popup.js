document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired");
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


        // Add event listener to the button
        document.getElementById("cleanBtn").addEventListener("click", function() {
            console.log("Clean button clicked");
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id },
                files: ["snippets/snippet.js"]
            });
        });
        
    });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const alertDiv = document.getElementById("alert");
    const cleanBtn = document.getElementById("cleanBtn");

    if (message.found) {
        cleanBtn.classList.remove("disabled");
        cleanBtn.innerHTML = "Clean this Article! &#10024;";
        alertDiv.classList.remove("alert-primary");
        alertDiv.classList.add("alert-success");
        alertDiv.innerHTML = "<strong>Super!</strong><br> New York Times Article found!";
        
        // chrome.runtime.sendMessage({ action: "setActive" });
    } else {
        cleanBtn.classList.add("disabled");
        cleanBtn.innerHTML = "Clean this Article! &#10024;";
        alertDiv.classList.remove("alert-success");
        alertDiv.classList.add("alert-primary");
        alertDiv.innerHTML = "<strong>Sorry</strong><br> New York Times Article not found.";
        // chrome.runtime.sendMessage({ action: "removeActive" });
    }
});