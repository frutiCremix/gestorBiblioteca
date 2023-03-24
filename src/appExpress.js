import  express from "express";
import  router  from "./routes/routes.js";
import bodyParser from "body-parser";
import cors from 'cors';

const PORT=3000;
const app=express();
const corsOptions = {
    origin: 'http://localhost:5500'
  };
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(router);

app.listen(PORT,()=>{
    console.log(`Server Express a la escucha por el port:${PORT}`);
})
