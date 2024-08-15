const { response } = require("express");
const jwt = require("jsonwebtoken"); // Cambié "jsw" a "jwt"

// Middleware para validar JWT
const validarJWT = (req, res = response, next) => {

    // Obtener el token del encabezado x-token
    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        // Verificar el token usando el secret de configuración
        const {uid, name} = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

         req.uid = uid; // Guardar el uid en el request para futuros usos
         req.name = name;
        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token inválido'
        });
    }

    next(); // Llamar a next() para continuar con la siguiente función del middleware

};

module.exports = {
    validarJWT
};
