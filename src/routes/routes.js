import express from 'express';
import controllerGET from '../controllers/controllerGET.js';
import controllerDELETE from '../controllers/controllerDELETE.js';
import controllerCREATE from '../controllers/controllerCREATE.js';
import controllerPUT from '../controllers/controllerPut.js';
import controllerPATCH from '../controllers/controllerPATCH.js';
const router=express()


router.get('/api',controllerGET.getAllLibros);
router.get('/api/user/:nombre?/:password?',controllerGET.getUserName);
router.post('/api/register',controllerCREATE.createUser);
router.delete('/api/:id',controllerDELETE.deleteLibro);
router.post('/api/:titulo/:autor/:precio',controllerCREATE.crearlibro);
router.put('/api/:id/:titulo/:autor/:precio',controllerPUT.putLibro);
router.patch('/api/:id/:titulo?/:autor?/:precio?',controllerPATCH.patchLibro);

export default router;