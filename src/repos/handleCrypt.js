import bcrypt from 'bcryptjs';
const salt=10;
function encriptar(password){
    let pEncriptada=bcrypt.hashSync(password,salt);

    return pEncriptada;
}
function compara(password,hash){
    //passwor llega en la forma "password=1234" hay qeu formatearlo antes de comparar
    //const pass=password.split('=')[1];
    return bcrypt.compare( password ,  hash);
}

export {encriptar,compara};