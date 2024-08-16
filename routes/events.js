const {Router} = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEventos, actualizarEventos, eliminarEventos } = require('../controllers/events');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');

const router = Router();

//Todas tienen que pasar por la validacion JWT
router.use(validarJWT)

// Obtener eventos
router.get('/', getEventos)



// Crear
router.post(
    '/', 
    [
        check('title', 'El titulo es obligarotio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalizacion es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEventos
)

// Actualizar
router.put('/:id', actualizarEventos)

// Actualizar
router.delete('/:id', eliminarEventos)


module.exports = router;


