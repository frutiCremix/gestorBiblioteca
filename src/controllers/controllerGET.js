import {getLibros} from '../models/modelLibro.js';
import {getUserName} from '../models/modelUser.js';
import { compara } from '../repos/handleCrypt.js';

const controllerGET={
    getAllLibros:(req,res)=>{
        getLibros.getAllLibros((error,results)=>{
            if(error)throw error;
            //res.send();
           
            res.json(results)
        });
    },
    getUserName: (req, res) => {
      const {name, password} = req.body;
    
       getUserName.getName(name, async(error, results) => {
        if (error) {
          console.log(error); 
          return res.status(500).json({ message: 'Error al buscar el usuario' });
        }
    
        if (results.length === 0) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
    
        const user = results[0];
        //console.log(results);
        const iguales = await compara(password, user.contraseña);
        
        if (!iguales) {
          res.send({ login:false });
        } else {
          //res.send({ success: "usuario autenticado con exito" });
          res.send({login:true});
          

        }
      });
    }
    
          
      
    
   
}

export default controllerGET;

