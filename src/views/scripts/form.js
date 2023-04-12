const formAdd=document.getElementById('formAdd');
const formDelete=document.getElementById('formDelete');
const formPatch=document.getElementById('formPatch');
////////////////////////////////////////////////////////////////
formAdd.addEventListener('submit',(e)=>{
    e.preventDefault();
    const titulo=document.getElementById('titulo');
    const autor=document.getElementById('autor');
    const precio=document.getElementById('precio');

    const URL=`http://localhost:3000/api/${titulo.value}/${autor.value}/${precio.value}`;

    fetch(URL,{method: 'POST'})
    .then(res=>res.json())
    .then(data=>confirmar(data))
});
////////////////////////////////////////////////////////////////
formDelete.addEventListener('submit',(e)=>{
    e.preventDefault();
   
    const idDelete=document.getElementById('idDelete');

    const URL=`http://localhost:3000/api/${idDelete.value}`;

    fetch(URL,{method: 'DELETE'})
    .then(res=>res.json())
    .then(data=>confirmar(data))
});

///////////////////////////////////////////////////////////////
formPatch.addEventListener('submit',(e)=>{
    e.preventDefault();
   
    const idPatch=document.getElementById('idPatch');
    const tituloPatch=document.getElementById('tituloPatch');
    const autorPatch=document.getElementById('autorPatch');
    const precioPatch=document.getElementById('precioPatch');
    let tituloPatchValue=tituloPatch.value;
    let autorPatchValue=autorPatch.value;
    let precioPatchValue=precioPatch.value;
    let cont=0;
    if (idPatch.value.trim() === '') {
        alert('Por favor, ingrese el ID del libro a modificar.');
        return;
    }
    if (tituloPatch.value.trim() === '') {
        tituloPatchValue='nada';
        cont++;
    }
    if (autorPatch.value.trim() === '') {
        autorPatchValue='nada';
        cont++
    }
    if (precioPatch.value.trim() === '') {
        precioPatchValue='nada';
        cont++
    }
    if(cont==3){
        alert('no se especificaron campos');
        return;
    }
    const URL=`http://localhost:3000/api/${idPatch.value}/${tituloPatchValue}/${autorPatchValue}/${precioPatchValue}`;


fetch(URL,{method: 'PATCH'})
    .then(res=>res.json())
    .then(data=>confirmar(data))
});
///////////////////////////////////////////////////////////////
function confirmar(data){
    if(data.exito){
        switch(data.accion){
            case 'create':{alert('libro creado con exito');break;}
            case 'delete':{alert('libro borrado con exito');break;}
            case 'patch':{alert('libro modificado con exito');break;}
        }
    }
}
