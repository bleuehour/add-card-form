/// Card number on card
const numberSpanTags = document.querySelectorAll(".card-number span");
let currentNumber = "";
/// Card number input field
const cardNumberField = document.getElementById("cardNumber");

cardNumberField.addEventListener("input", (e) => {
  const match = /^[0-9]*$/;

  if (!match.test(e.target.value)) {
    return;
  }
  const index = e.target.value.length - 1;
  if (e.data === null) {
    if (Math.abs(currentNumber.length - e.target.value.length) === 1) {
      numberSpanTags[index + 1].innerHTML = `<span>#<br/></span>`;
      numberSpanTags[index + 1].classList.remove("typed");
    } else {
      let i = e.target.value.length;
      while (i < 16) {
        numberSpanTags[i].innerHTML = `<span>#<br/></span>`;
        numberSpanTags[i].classList.remove("typed");
        i += 1;
      }
    }
  } else {
    numberSpanTags[index].innerHTML = `<span>#<br/>${e.data}</span>`;
    numberSpanTags[index].classList.add("typed");
    currentNumber = e.target.value;
  }
});

/// CARD DATES
const cardDateTag = document.querySelector(".card-date");
const monthSelect = document.getElementById("expired-month");
const yearSelect = document.getElementById("expired-year");

let month = "01";
let year = "23";

/// MONTH CHANGE
monthSelect.addEventListener("change", (e) => {
  month = e.target.value;
  cardDateTag.innerHTML = `<span>exp end </span> ${month}/${year}`;
});
/// YEAR CHANGE
yearSelect.addEventListener("change", (e) => {
  year = e.target.value;
  cardDateTag.innerHTML = `<span>exp end </span> ${month}/${year}`;
});

/// CARD NAMES
const cardNameTag = document.querySelector(".card-name");
const nameInputField = document.getElementById("cardName");

nameInputField.addEventListener("input", (e) => {
  const default_name = "Monzo Member";

  if (e.target.value.length === 0) {
    cardNameTag.innerText = default_name;
  } else {
    cardNameTag.innerText = e.target.value;
  }
});

//// Tilt
VanillaTilt.init(document.querySelector(".card"), {
  speed: 400,
  max: 15,
  reverse: true,
  glare: true,
  "max-glare": 0.6,
});
