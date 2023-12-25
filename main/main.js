const focus = document.querySelector(".card-focus");

function updateCardNumber() {
  /// Card number on card
  const numberSpanTags = document.querySelectorAll(".card-number span");
  let currentNumber = "";
  const cardNumberField = document.getElementById("cardNumber");

  /// Card number input field

  cardNumberField.addEventListener("focusin", () => {
    const cardNumber = document.querySelector(".card-number");
    focus.style.width = `${cardNumber.clientWidth - 97}px`;
    focus.style.height = "25px";
    focus.style.top = "53%";
    focus.style.left = "8%";
    focus.style.opacity = "1";
  });

  cardNumberField.addEventListener("focusout", () => {
    focus.style.opacity = "0";
  });

  cardNumberField.addEventListener("input", (e) => {
    const match = /^[0-9]*$/;

    if (!match.test(e.target.value)) {
      return;
    }

    const index = e.target.value.length - 1;

    if (e.data === null) {
      if (Math.abs(currentNumber.length - e.target.value.length) === 1) {
        numberSpanTags[index + 1].innerHTML = `#`;
        numberSpanTags[index + 1].classList.remove("typed");
      } else {
        let i = e.target.value.length;

        while (i < 16) {
          numberSpanTags[i].innerHTML = `#`;
          numberSpanTags[i].classList.remove("typed");
          i += 1;
        }
      }
    } else {
      numberSpanTags[index].innerHTML = `<br/>${e.data}`;
      numberSpanTags[index].classList.add("typed");
      currentNumber = e.target.value;
    }
  });
}

function updateDates() {
  /// CARD DATES
  const cardDateTag = document.querySelector(".card-date");
  const monthSelect = document.getElementById("expired-month");
  const yearSelect = document.getElementById("expired-year");

  let month = "01";
  let year = "23";

  monthSelect.addEventListener("focusin", () => {
    const cardDate = document.querySelector(".card-date");
    focus.style.width = `${cardDate.clientWidth - 282}px`;
    focus.style.height = "25px";
    focus.style.top = "71%";
    focus.style.left = "40%";
    focus.style.opacity = "1";
  });
  monthSelect.addEventListener("focusout", () => {
    focus.style.opacity = "0";
  });
  yearSelect.addEventListener("focusin", () => {
    const cardDate = document.querySelector(".card-date");
    focus.style.width = `${cardDate.clientWidth - 282}px`;
    focus.style.height = "25px";
    focus.style.top = "71%";
    focus.style.left = "40%";
    focus.style.opacity = "1";
  });
  yearSelect.addEventListener("focusout", () => {
    focus.style.opacity = "0";
  });

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
}

function updateNames() {
  /// CARD NAMES
  const cardNameTag = document.querySelector(".card-name");
  const nameInputField = document.getElementById("cardName");

  nameInputField.addEventListener("focusin", () => {
    const cardName = document.querySelector(".card-name");
    focus.style.width = `${cardName.clientWidth}px`;
    focus.style.height = "25px";
    focus.style.top = "85%";
    focus.style.left = "5%";
    focus.style.opacity = "1";
  });
  nameInputField.addEventListener("focusout", () => {
    focus.style.opacity = "0";
  });

  nameInputField.addEventListener("input", (e) => {
    const default_name = "Monzo Member";

    if (e.target.value.length === 0) {
      cardNameTag.innerText = default_name;
    } else {
      cardNameTag.innerText = e.target.value;
    }

    const cardName = document.querySelector(".card-name");

    focus.style.width = `${cardName.clientWidth}px`;
  });
}

window.addEventListener("load", () => {
  updateCardNumber();
  updateDates();
  updateNames();
});

//// Tilt
VanillaTilt.init(document.querySelector(".card"), {
  speed: 400,
  max: 15,
  reverse: true,
  glare: true,
  "max-glare": 0.6,
});
