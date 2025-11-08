const consoleLog = document.querySelector("#consoleLog");

consoleLog.addEventListener("click", () => {
  alert("Для вывода необходимой информации");
});

// для alert

document.querySelector("#alert").addEventListener("click", function () {
  alert(
    'alert() — метод, который выводит модальное окно с сообщением и кнопкой "ОК". Блокирует выполнение кода до закрытия окна.'
  );
});

// для prompt

document.querySelector("#prompt").addEventListener("click", function () {
  const userInput = prompt(
    'prompt() — метод, который выводит модальное окно с полем ввода и кнопками "ОК"/"Отмена".  Введите что-нибудь:'
  );
});
