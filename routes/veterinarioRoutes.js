import  express  from "express";
const router = express.Router();
import { registrar, perfil, confirmar, autenticar, olvidePassword, comprobarToken, nuevoPassword, actualizarPerfil, actualizarPassword } from '../controllers/veterinarioControllers.js';
import checkAuth from "../middleware/authMiddleware.js"


// rutas publicas
router.post("/", registrar)
router.get("/confirmar/:token", confirmar)
router.post("/login", autenticar)
router.post("/olvide-password", olvidePassword)
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

// rutas protegidas
router.get("/perfil", checkAuth, perfil)
router.put("/perfil/:id", checkAuth, actualizarPerfil)
router.put('/actualizar-password', checkAuth, actualizarPassword )

export default router;