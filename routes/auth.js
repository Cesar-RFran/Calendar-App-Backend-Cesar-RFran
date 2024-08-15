
//  RUTAS DE USUARIOS / Auth
    // host + /api/auth

const {Router} = require('express')
const {check} = require('express-validator')
const router = Router()

const {crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

router.post(
    '/new', 
[//Midelwares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres una letra mayuscula una minuscula y un numero').isLength({min: 6}).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/),
    validarCampos
], 
 crearUsuario );

router.post(
    '/', 
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres una letra mayuscula una minuscula y un numero').isLength({min: 6}).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/),
        validarCampos
    ],
    loginUsuario );

router.get('/renew', validarJWT, revalidarToken );



 module.exports = router;