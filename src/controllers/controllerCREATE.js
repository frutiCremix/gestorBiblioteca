import { crearLibro } from "../models/modelLibro.js";
import {createUser} from "../models/modelUser.js";
import { encriptar } from "../repos/handleCrypt.js";
const controllerCREATE={
    crearlibro:(req,res)=>{
        const params=req.params;
        crearLibro.create(params,(error,results,fields)=>{
            if(error)throw error;
          
            
            res.send({exito:true,accion:'create'});
            
        });
    },
    createUser:(req,res)=>{
        const body=req.body;
        //console.log(body.password);
        const hash=encriptar(body.password);

        createUser.create(body,hash,(error,results,fields)=>{
            if(error)throw error;
            res.send({message:'usuario registrado correctamente'});
        });
    }
};

export default controllerCREATE;