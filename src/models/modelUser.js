import conexion from '../config/conexionDB.js'


const getUserName={
    getName:({nombre,password},callback)=>{
        //console.log(nombre,password)
        const name=nombre.split('=')[1];
        const pass=password.split('=')[1];

        //console.log(name,pass)
        conexion.query(`SELECT * FROM usuarios WHERE nombre=? AND contraseña=?`, [name, pass], callback);

    }
};
const createUser = {
    create: ({ name, email, userName, password }, callback) => {
        console.log(userName)
                conexion.query("INSERT INTO usuarios (nombre, email, username, contraseña) VALUES (?, ?, ?, ?)", [name, email, userName, password], callback); 
        }
};

export {getUserName,createUser};