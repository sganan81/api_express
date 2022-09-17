//Orden sugerido de importaciones
//1 - En primer lugar se importadn los paquetes propios de node
require('dotenv').config(); //2 - Paquetes de terceros
const Server = require('./models/server'); //3- Paquetes nuestros

//Instanciamos la clase Server
const server = new Server();

//Invocamos el método listen para levantar nuestro servidor
server.listen();
