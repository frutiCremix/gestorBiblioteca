const arrBtn=Array.from(document.querySelectorAll('.btn-menu'));

const add=document.querySelector('.add');
const remove=document.querySelector('.remove');
const modify=document.querySelector('.modify');

document.addEventListener("DOMContentLoaded", function() {
arrBtn.forEach(elem=>{
    elem.addEventListener("click",(e)=>{
        switch(e.target.textContent){
            case 'ver Todos':{
                main.style.display='block';
                add.style.display='none';
                remove.style.display='none';
                modify.style.display='none';
                break;
            }
            case 'agregar Libro':{
                main.style.display='none';
                add.style.display='flex';
                remove.style.display='none';
                modify.style.display='none';
           
                break;
            }
            case 'eliminar Libro':{
                main.style.display='none';
                add.style.display='none';
                remove.style.display='flex';
                modify.style.display='none';
           
                break;
            }
            case 'modificar Libro':{
                main.style.display='none';
                add.style.display='none';
                remove.style.display='none';
                modify.style.display='flex';
           
                break;
            }
        }
    })
})});

