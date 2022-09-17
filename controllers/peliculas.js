//Importe las interfaces request y response para poder tener información de cada método o propiedad Ej:params, query, etc
const { request, response } = require("express");

const getPopulares = (req, res) => {
    res.json('Populares API!')
}

const getMovie = (req = request, res = response) => {
    //Parametro dentro de la URL. EJ api/v1/movie/10/

    //TODO: validar parametro de entrada

    const {id} = req.params;
    res.json(`Movie API! ${id}`);
}

const getEstrenos = (req = request, res = response) => {
    //Query params que vienen por url luego del "?"
    const {anio, categoria, idioma, page, ...resto} = req.query;
    
    //TODO: validar parametros de entrada
    
    res.status(401).json({
        msg:'Estrenos',        
        anio,
        categoria,
        idioma,
        page,
    });
}

//Exportación de todas mis funciones/controllers creados. 
//Recordar agregar a esta sección las futuras funciones a crear
module.exports = {
    getPopulares,
    getMovie,
    getEstrenos
}
