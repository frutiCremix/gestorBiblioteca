const eventoForm = document.getElementById('formRegister');
const urlRegister = 'http://localhost:3000/api/register';

eventoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputName = document.getElementById('inputNameRegister');
  const inputEmail = document.getElementById('inputEmailRegister');
  const inputUserName = document.getElementById('inputUserNameRegister');
  const inputPassword = document.getElementById('inputPasswordRegister');

//validacion de email
const emailRegex = /^[a-zA-Z0-9._%+-]+@(hotmail|outlook|gmail)\.(com)$/;

if(inputUserName.value.length<3){
  alert('tu userName debe poseer mas de 3 caracteres');
  return;
}
if (!emailRegex.test(inputEmail.value)) {
  alert('Por favor ingrese un correo electrónico de Hotmail válido');
  return;
}
//validacion de contraseña
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;

if (!passwordRegex.test(inputPassword.value)) {
  alert('Por favor ingrese una contraseña válida con , al menos, 1 mayuscula, 1 minuscula, 1 numero y longitud de 8 caracteres como minimo');
  return;
}

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
