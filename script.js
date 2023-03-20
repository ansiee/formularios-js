const regexSenha =
  /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const senha = document.getElementById("senha");
const email = document.getElementById("email");
const msg = document.getElementById("status");

document.getElementById("loginBtn").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("teste");
  if (regexSenha.test(senha.value) && regexEmail.test(email.value)) {
    console.log("pop");
    msg.style.color = "green";
    msg.style.display = "block";
    msg.innerHTML = "Seu login foi concluído com sucesso!!";
  } else {
    if (regexSenha.test(senha.value) == false) {
      msg.style.color = "red";
      msg.style.display = "block";
      msg.innerHTML = "Sua senha é inválida, tente reescrever.";
    }
    if (regexEmail.test(email.value) == false) {
      msg.style.color = "red";
      msg.style.display = "block";
      msg.innerHTML = "Seu e-mail é inválido, tente reescrever.";
    }
  }
});
