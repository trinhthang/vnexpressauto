 chrome.tabs.create

 chrome.browserAction.onClicked.addListener(function(tab) {
      var newURL = "http://ighoot.com";
        chrome.tabs.create({ url: newURL });
      chrome.tabs.executeScript({file: "popup.js"});
});
