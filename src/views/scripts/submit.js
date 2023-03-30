const EventoForm=document.getElementById('form');

const url='http://localhost:3000/api/user';

 
EventoForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputName=document.getElementById('inputName');
    const inputPassword=document.getElementById('inputPassword');

    const body = {
        name: inputName.value,
        password: inputPassword.value
      };

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
    .then(res => res.json())
    .then(data =>{
         if(data.login){
            window.location.href = 'home.html';}
        else{alert('usuario o contraseña erroneos');}
        }
    );

});

    

