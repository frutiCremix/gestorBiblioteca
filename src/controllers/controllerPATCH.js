import { modificarLibro } from "../models/modelLibro.js";

const controllerPATCH={
    patchLibro:(req,res)=>{
        const id=req.params.id;
        const params=req.params;
       
        modificarLibro.patch(id,params,(error,results)=>{
            if(error)throw error;
            console.log(`valores ${params} modificados con exito`);
            res.redirect('/api');
        });
    }
};
export default controllerPATCH;