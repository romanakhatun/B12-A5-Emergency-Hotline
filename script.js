const callButtons = document.getElementsByClassName("btn-call");
const historyData = [];

for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    const card = this.closest(".card");

    const title = card.querySelector(".title").innerText;
    const number = card.querySelector(".number").innerText;

    alert("📞 Calling " + title + " " + number + "...");

    const data = {
      name: title,
      number: number,
      date: new Date().toLocaleTimeString(),
    };

    historyData.push(data);
    console.log(historyData);

    const historyCardWrapper = document.getElementById("history-cards-wrapper");
    for (const data of historyData) {
      const cardDiv = document.createElement("div");
      cardDiv.innerHTML = `
        <div class="history-card">
          <div class="history-info">
            <h1>${data.name}</h1>
            <p>${data.number}</p>
          </div>
          <h4>${data.date}</h4>
        </div>
      `;

      historyCardWrapper.appendChild(cardDiv);
    }
  });
}

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
