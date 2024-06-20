const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const nomeValue = nome.value;
  const emailValue = email.value;
  const telefoneValue = telefone.value;
  const mensagemValue = mensagem.value;

  if (nomeValue === "") {
    setErrorFor(nome, "campo obrigatório");
  } else {
    setSuccessFor(nome);
  }

  if (emailValue === "") {
    setErrorFor(email, "campo obrigatório");
  } else {
    setSuccessFor(email);
  }

  if (telefoneValue === "") {
    setErrorFor(telefone, "campo obrigatório");
  } else {
    setSuccessFor(telefone);
  }

  if (mensagemValue === "") {
    setErrorFor(mensagem, "campo obrigatório");
  } else {
    setSuccessFor(mensagem);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}
