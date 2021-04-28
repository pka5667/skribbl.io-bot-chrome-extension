//recieved data from content js
chrome.runtime.onMessage.addListener(recievedMessage);

//window. is used to make it completely globel
window.wordArray = [];

function recievedMessage(message, sender, sendResponse){
    if (message.type == "sendAllWords") {
        window.wordArray = message.wordArray;
    }
}