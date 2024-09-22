const allQuestions = document.querySelectorAll(".question");

allQuestions.forEach((question) => {
  const plusIcon = question.querySelector(".plus-icon");
  const minusIcon = question.querySelector(".minus-icon");
  const questionText = question.querySelector(".question-text");

  plusIcon.addEventListener("click", () => {
    // console.log("clicked");
    questionText.style.display = "block";
    plusIcon.style.display = "none";
    minusIcon.style.display = "block";
  });
  minusIcon.addEventListener("click", () => {
    // console.log("clicked");
    questionText.style.display = "none";
    plusIcon.style.display = "block";
    minusIcon.style.display = "none";
  });
});

