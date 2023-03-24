const eventoForm = document.getElementById('formRegister');
const urlRegister = 'http://localhost:3000/api/register';

eventoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputName = document.getElementById('inputNameRegister');
  const inputEmail = document.getElementById('inputEmailRegister');
  const inputUserName = document.getElementById('inputUserNameRegister');
  const inputPassword = document.getElementById('inputPasswordRegister');

  const body = {
    name: inputName.value,
    email: inputEmail.value,
    userName: inputUserName.value,
    password: inputPassword.value
  };

  fetch(urlRegister, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(res=>res.json())
  .then(data=>console.log(data));
});
