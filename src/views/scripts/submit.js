const EventoForm=document.getElementById('form');

const url='http://localhost:3000/api/user/';

 
EventoForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputName=document.getElementById('inputName');
    const inputPassword=document.getElementById('inputPassword');
    const urlWithQuery = `${url}nombre=${inputName.value}/password=${inputPassword.value}`;
    fetch(urlWithQuery)
    .then(res => res.json())
    .then(data => console.log(data));

});

    

