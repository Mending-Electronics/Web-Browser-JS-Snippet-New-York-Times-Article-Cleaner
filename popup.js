function OpenURL() {
    chrome.tabs.create({ url: "https://nicolas.brondin-bernard.com" });
}
document.getElementById("openBtn").addEventListener("click", OpenURL);