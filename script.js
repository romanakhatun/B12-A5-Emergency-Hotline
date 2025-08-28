const callButtons = document.getElementsByClassName("btn-call");
const historyData = [];

for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    const card = this.closest(".card");

    const title = card.querySelector(".title").innerText;
    const number = card.querySelector(".number").innerText;
    const coinCount = parseInt(document.getElementById("coin-count").innerText);

    if (coinCount < 1) {
      alert("❌ You don't have sufficient coins");
      return;
    }

    alert("📞 Calling " + title + " " + number + "...");
    document.getElementById("coin-count").innerText = coinCount - 20;

    const data = {
      name: title,
      number: number,
      date: new Date().toLocaleTimeString(),
    };

    historyData.push(data);
    console.log(historyData);

    const historyCardWrapper = document.getElementById("history-cards-wrapper");
    historyCardWrapper.innerHTML = "";

    for (const item of historyData) {
      const cardDiv = document.createElement("div");
      cardDiv.innerHTML = `
        <div class="history-card">
          <div class="history-info">
            <h1>${item.name}</h1>
            <p>${item.number}</p>
          </div>
          <h4>${item.date}</h4>
        </div>
      `;

      historyCardWrapper.appendChild(cardDiv);
    }
  });
}
// clear data from history
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-cards-wrapper").innerHTML = "";
  historyData.length = 0;
});

//copy count
const copyButtons = document.getElementsByClassName("btn-copy");
for (const btn of copyButtons) {
  btn.addEventListener("click", function () {
    const card = this.closest(".card");
    const number = card.querySelector(".number").innerText;

    navigator.clipboard.writeText(number);
    alert("Number is copied: " + number);

    const copyCount = parseInt(document.getElementById("copy-count").innerText);
    document.getElementById("copy-count").innerText = copyCount + 1;
  });
}

// love to call
const hearts = document.getElementsByClassName("fa-heart");

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    const loveCount = parseInt(document.getElementById("love-count").innerText);
    document.getElementById("love-count").innerText = loveCount + 1;
  });
}
