chrome.tabs.getSelected(null , function(tab) {
    var iframe = document.getElementById("piframe");
    iframe.src = 'https://pinboard.in/add?url='+
    encodeURIComponent(tab.url)+
    '&title='+encodeURIComponent(tab.title);
});
