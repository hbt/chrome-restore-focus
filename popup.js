$(document).ready(function() {
    window.focus();
    document.body.focus();
    var first = document.getElementById("first");
    first.focus();

    // Note(hbt) there is a tiny delay less than 1ms before focus is executed. Use interval and check for focus in 5 is not enough
    setTimeout(function() {
        window.close();
    }, 50);

    chrome.runtime.sendMessage({ action: "restoreFocusHack" }, function(response) {});
});
