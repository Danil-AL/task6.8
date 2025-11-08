const textInput = document.getElementById("textInput");
const submitBtn = document.getElementById("submitBtn");
const duplicateField = document.getElementById("duplicateField");

textInput.addEventListener("input", function () {
  duplicateField.textContent = textInput.value;
});

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  console.log(textInput.value);

  textInput.value = "";
  duplicateField.textContent = "";
});
