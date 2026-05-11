const plusIcon = "./assets/images/icon-plus.svg";
const minusIcon = "./assets/images/icon-minus.svg";
const questions = [...document.querySelectorAll(".faq-question")];

function setAnswer(button, expanded) {
  const answer = document.getElementById(button.getAttribute("aria-controls"));
  const icon = button.querySelector("img");

  button.setAttribute("aria-expanded", String(expanded));
  answer.hidden = !expanded;
  icon.src = expanded ? minusIcon : plusIcon;
}

questions.forEach((button, index) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    setAnswer(button, !isExpanded);
  });

  button.addEventListener("keydown", (event) => {
    const lastIndex = questions.length - 1;
    let nextIndex = null;

    if (event.key === "ArrowDown") nextIndex = index === lastIndex ? 0 : index + 1;
    if (event.key === "ArrowUp") nextIndex = index === 0 ? lastIndex : index - 1;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = lastIndex;

    if (nextIndex !== null) {
      event.preventDefault();
      questions[nextIndex].focus();
    }
  });
});
