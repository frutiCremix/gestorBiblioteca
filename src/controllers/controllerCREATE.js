import { crearLibro } from "../models/modelLibro.js";
import {createUser} from "../models/modelUser.js";
const controllerCREATE={
    crearlibro:(req,res)=>{
        const params=req.params;
        crearLibro.create(params,(error,results,fields)=>{
            if(error)throw error;
          
            console.log(`libro creado con exito`);
            res.redirect('/api');
            
        });
    },
    createUser:(req,res)=>{
        const body=req.body;
        console.log(body.userName);

        createUser.create(body,(error,results,fields)=>{
            if(error)throw error;
            res.send({message:'usuario registrado correctamente'});
        });
    }
};

export default controllerCREATE;