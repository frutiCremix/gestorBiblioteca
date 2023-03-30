import conexion from '../config/conexionDB.js'


const getUserName={
    getName:(name,callback)=>{
        //console.log(nombre,password)
        //const nombre=name.split('=')[1];

        //console.log(name,pass)
        conexion.query(`SELECT * FROM usuarios WHERE nombre=?`, [name], callback);

    }
};
const createUser = {
    create: ({ name, email, userName},hash, callback) => {
        //console.log(userName)
                conexion.query("INSERT INTO usuarios (nombre, email, username, contraseña) VALUES (?, ?, ?, ?)", [name, email, userName, hash], callback); 
        }
};

export {getUserName,createUser};