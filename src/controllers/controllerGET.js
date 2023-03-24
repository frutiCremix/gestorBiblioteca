import {getLibros} from '../models/modelLibro.js';
import {getUserName} from '../models/modelUser.js';

const controllerGET={
    getAllLibros:(req,res)=>{
        getLibros.getAllLibros((error,results)=>{
            if(error)throw error;
            //res.send();
           
            res.json(results)
        });
    },
    getUserName: (req, res) => {
        const params=req.params;
        
        getUserName.getName(params, (error, results) => {
          if (error) {
            console.log(error); 
            return res.status(500).json({ message: 'Error al buscar el usuario' }); // return a response with an error message
          }
          res.json(results);
        });
      }
    
   
}

export default controllerGET;

