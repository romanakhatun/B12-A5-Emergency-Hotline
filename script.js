const callButtons = document.getElementsByClassName("btn-call");
const historyData = [];

for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    const card = this.closest(".card");

    const title = card.querySelector(".title").innerText;
    const number = card.querySelector(".number").innerText;

    alert("Calling " + title + " " + number + " ...");

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
