const tapHeartIcons = document.getElementsByClassName("tap-heart");
const countHeart = document.getElementById("count-heart");
let heartCount = 0;

for (let i = 0; i < tapHeartIcons.length; i++) {
  tapHeartIcons[i].addEventListener("click", function () {
    heartCount++;
    countHeart.textContent = heartCount;
  });
}

// Existing call button functionality code
const callButtons = document.getElementsByClassName("btn-success");
const countCoin = document.getElementById("count-coin");
const historyList = document.getElementById("history-list");

let coinCount = 100;
countCoin.textContent = coinCount;

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function (event) {
    let parent = event.target.parentElement;
    while (parent && parent.className.indexOf("help-card") === -1) {
      parent = parent.parentElement;
    }
    const card = parent;

    const serviceName = card.getElementsByTagName("h1")[0].textContent;
    const serviceNumber = card.getElementsByTagName("span")[0].textContent;

    if (coinCount < 20) {
      alert("Insufficient coins. You need at least 20 coins to make a call.");
      return;
    }

    coinCount -= 20;
    countCoin.textContent = coinCount;

    alert("Calling " + serviceName + " at " + serviceNumber);

    const historyItem = document.createElement("div");
    historyItem.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "bg-gray-100",
      "p-2",
      "rounded-lg",
      "mt-2"
    );
    historyItem.innerHTML = `
      <div>
        <p class="text-xs font-semibold">${serviceName}</p>
        <p class="text-xs font-normal">${serviceNumber}</p>
      </div>
      <p class="text-xs">Date</p>
    `;
    historyList.appendChild(historyItem);
  });
}

// Clear History button function
const clearButton = document.getElementById("clear-history-btn");

clearButton.addEventListener("click", function () {
  // clear only the items within the new history-list
  historyList.innerHTML = "";
});
