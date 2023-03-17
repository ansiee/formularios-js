const regex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;

const loginBtn = document.getElementById('loginBtn');
const senhaInput = document.getElementById('senha');

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if(regex.test(senhaInput.value)){
        alert("Você está logado!")
    } else {
        senhaInput.style.border = "2px solid red";
    }
});