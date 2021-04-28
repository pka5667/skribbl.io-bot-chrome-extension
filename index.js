$(function () {
    setInterval(function() {
        index();
    }, 1000);
})

let bgPage = chrome.extension.getBackgroundPage();
let wordArr = bgPage.wordArray;

function index() {
  document.getElementById("guessBtns").innerHTML = "";
  var btns = "";
  for (var word in wordArr) {
    btns +=
      '<a id="word-' + wordArr[word] + '" class="sendGuessButtn"><button id="btn-' + wordArr[word] + '">' + wordArr[word] + "</button></a>";
  }

  $("#guessBtns").html(btns);

  $('.sendGuessButtn').on("click", function () {
      console.log(this.id);
      let message = (this.id).split("-")[1];
      let params = {
          active: true,
          currentWindow: true
      }
      chrome.tabs.query(params, gotTabs);

      function gotTabs(tabs) {
          let msg = {
              type: "guessSelected",
              selectedWord: message
          }
          chrome.tabs.sendMessage(tabs[0].id, msg)
      }
  })
}