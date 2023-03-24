import mysql from 'mysql2';

const conexion=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'biblioteca'
});
conexion.connect((error)=>{
    if(error)throw error;
    console.log('conexion a la base de datos exitosa');
});

export default conexion;