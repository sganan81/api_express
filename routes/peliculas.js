const { Router } = require("express");
const { getPopulares, getEstrenos, getMovie } = require("../controllers/peliculas");

const router = Router();

//Listado de registros
router.get('/populares', getPopulares);

//Query params
router.get('/estrenos', getEstrenos);

//Acceso individual
//la palabra id puede ser reemplazada por cualquier otro término. Ej:idmovie
router.get('/movie/:id', getMovie);


//Ej de ruta variable
/* 
const movie = '/movie';
app.get(`${movie}`, (req, res) => {
  res.send('movie API!')
}) 
*/

//Exportación de mis rutas
module.exports = router;