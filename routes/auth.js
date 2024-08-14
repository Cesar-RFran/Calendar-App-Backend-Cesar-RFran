
//  RUTAS DE USUARIOS / Auth
    // host + /api/auth

const {Router} = require('express')
const router = Router()

const {crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')

router.post('/new', loginUsuario);

 router.post('/', crearUsuario);

router.get('/renew', revalidarToken );


 module.exports = router;