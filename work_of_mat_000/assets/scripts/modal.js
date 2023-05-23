// Javascript do modal do projeto

// 1. Passo (Declarar variaveis)

var signButton = document.querySelector(".signClient");
var modalClient = document.querySelector(".modalClient");

// 2. Passo (Criar função de abrir fechar modal..)

signButton.addEventListener("click", () => {
  if (modalClient.classList.contains("modalOpen") == true) {
    modalClient.classList.remove("modalOpen");
  } else {
    modalClient.classList.add("modalOpen");
  }
});

var closeButton = document.querySelector(".closeButton");

closeButton.addEventListener("click", () => {
  modalClient.classList.remove("modalOpen");
});
