let display = document.querySelector(".display");
let buttons = Array.from(document.querySelectorAll(".button"));

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    switch (event.target.textContent) {
      case "AC":
        display.textContent = "0";
        break;
      case "=":
        try {
          display.textContent = eval(display.textContent)
        } catch (event) {
          display.textContent = 'Error';
        }
        break;
      case '+/-':
          display.textContent = '-';
          break;
      case '%': 
          let passedText = display.textContent + '/100';
          display.textContent = eval(passedText)
          break;
      default:
        if (display.textContent === "0" && event.target.textContent !== ".") {
          display.textContent = event.target.textContent;
        } else {
          display.textContent += event.target.textContent;
        }
    }
  });
});
