const form = document.querySelector("form");
const labels = form.querySelectorAll("label");
const shuffleBtn = document.querySelector("#shuffleBtn");
const changeBtn = document.querySelector("#changeBtn");
const showBtn = document.querySelector("#showBtn");
const inputCheck = form.querySelectorAll("input[type=checkbox]");

shuffleBtn.addEventListener("click", function () {
  labels.forEach((label) => {
    let randomIndex = Math.floor(Math.random() * labels.length);
    console.log(randomIndex);
    let tempText = label.textContent;
    label.textContent = labels[randomIndex].textContent;
    labels[randomIndex].textContent = tempText;
  });
});

changeBtn.addEventListener("click", () => {
  console.log("Change Button Was Clicked");
});

showBtn.addEventListener("click", () => {
  inputCheck.forEach((input) => {
    if (!input.checked) {
      input.parentNode.style.display = "none";
    }
  });
});
