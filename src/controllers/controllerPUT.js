import { modificarLibro } from "../models/modelLibro.js";

const controllerPUT={
    putLibro:(req,res)=>{
        const id=req.params.id;
        const params=req.params;
        modificarLibro.put(id,params,(error,results)=>{
           if(error)throw error;
           console.log(`libro con id: ${id} modificado con exito`);
           res.redirect('/api'); 
        });
    }
};
export default controllerPUT;