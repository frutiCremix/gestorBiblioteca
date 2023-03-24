import conexion from '../config/conexionDB.js'

const getLibros={
    getAllLibros:(callback)=>{
        conexion.query('SELECT * FROM libros',callback);
    }
}
const eliminarLibro={
    delete:(elementoId,callback)=>{
        conexion.query(`DELETE FROM libros WHERE id =?`, [elementoId],callback)
    }
}
const crearLibro={
    create:({titulo,autor,precio},callback)=>{
        conexion.query("INSERT INTO libros (titulo, autor, precio) VALUES (?, ?, ?)",
      [titulo, autor, precio],callback);
    }
}
const modificarLibro={
    put:(id,{titulo,autor,precio},callback)=>{
        conexion.query('UPDATE libros SET titulo=?, autor=?, precio=? WHERE id=?',[titulo,autor,precio,id],callback);
    },
    patch:(id,params,callback)=>{
        let consulta='UPDATE libros SET ';
        if (params.titulo!='nada') {
            consulta += `titulo='${params.titulo}', `;
          }
          
          if (params.autor!='nada') {
            consulta += `autor='${params.autor}', `;
          }
          
          if (params.precio!='nada') {
            consulta += `precio='${params.precio}', `;
          }
        consulta=consulta.slice(0,-2);//eliminamos la ultima coma y espacio vacio del string
        consulta+=`WHERE id=${id}`;
        conexion.query(consulta,callback);    
    }
}

export {getLibros,eliminarLibro,crearLibro,modificarLibro};