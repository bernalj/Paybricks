var messages = {
  "EXTENSION_LOADED": "Loaded PayBricks...",
  "PAYWALL_REMOVED": "Paywall removed. Enjoy the article!"
};

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url.includes('elperiodico.com')) {
    chrome.tabs.executeScript(tabId, { file: 'sites/elperiodico.js' });
  } else if (changeInfo.status === 'complete' && tab.url.includes('elpais.com')) {
    chrome.tabs.executeScript(tabId, { file: 'sites/elpais.js' });
  }
});