const express = require('express');
const cors = require('cors')


class Server {
    
    constructor(){
        this.app = express();

        //Seteo de puerto por defecto
        this.port = process.env.PORT || 3000;

        //1° en Orden
        this.middleware();
        //2° en Orden
        this.router();

    }   

    middleware(){
        //Cors
        //TODO: Agregar alguna regla en caso que sea necesario
        this.app.use(cors());

        //Una vez configurada la carpeta pública, la ruta raíz (get('/') deja de funcionar
        this.app.use(express.static('public'));
    }


    router(){                        
        this.app.use('/api/v1/peliculas',require('../routes/peliculas'));
       
        this.app.all('*', (req, res) => {
            res.send('400 Página no encotrada')
        })
    }

    listen(){        
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })  
    }

}

module.exports = Server;


