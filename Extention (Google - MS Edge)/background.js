// background.js

async function checkActiveTab() {
  try {
      let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tab && tab.url) {
          if (tab.url.startsWith("https://www.nytimes.com/")) {
              // Inject script to check for <article> element
              chrome.scripting.executeScript({
                  target: { tabId: tab.id },
                  func: () => !!document.querySelector('article')
              }, (results) => {
                  if (results && results[0] && results[0].result) {
                      chrome.action.setIcon({ path: "icon/icon.png" });
                      chrome.runtime.sendMessage({ found: true });
                      console.log("Article found!")
                  } else {
                      chrome.action.setIcon({ path: "icon/icon_disabled.png" });
                      chrome.runtime.sendMessage({ found: false });
                      console.log("Article not found.")
                  }
              });
          } else {
              chrome.action.setIcon({ path: "icon/icon_disabled.png" });
              chrome.runtime.sendMessage({ found: false });
              console.log("url: not the 'https://www.nytimes.com/'")
          }
      } else {
          chrome.action.setIcon({ path: "icon/icon_disabled.png" });
          chrome.runtime.sendMessage({ found: false });
          console.log("url: no url found.")
      }
  } catch (error) {
      chrome.action.setIcon({ path: "icon/icon_disabled.png" });
      chrome.runtime.sendMessage({ found: false });
      console.log(error)
  }
}

chrome.tabs.onActivated.addListener(checkActiveTab);
chrome.tabs.onUpdated.addListener(checkActiveTab);
