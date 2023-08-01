const textToType = "Olá, seja bem-vindo(a) ao meu site.";
const typedTextElement = document.getElementById("typed-text");

function typeText(index) {
  if (index <= textToType.length) {
    const textToShow = textToType.substring(0, index);
    typedTextElement.textContent = textToShow;
    setTimeout(() => {
      typeText(index + 1);
    }, 100);
  }
}

window.onload = function () {
  typeText(0);
};

