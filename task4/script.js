const link = document.getElementById("link");

link.addEventListener("click", function (event) {
  event.preventDefault();

  const newText = prompt("Введите новый текст для ссылки:");

  link.textContent = newText;
});
