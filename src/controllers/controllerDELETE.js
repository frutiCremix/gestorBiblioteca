import {eliminarLibro} from '../models/modelLibro.js';

const controllerDELETE={
    deleteLibro:(req,res)=>{
        const id=req.params.id;
        eliminarLibro.delete(id,(error,results,fields)=>{
            if(error)throw error;
          
            console.log(`libro con id: ${id} eliminado con exito`);
            res.redirect('/api');
            
        })
    }
}
export default controllerDELETE;