const guardarDB = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquire');
const Tareas = require('./models/tareas');

require('colors');

const tareas = new Tareas();

const main = async()=>{

do{
    opt= await inquirerMenu();
    switch (opt) {

        case '1':
        const desc = await leerInput('Descripcion: ')
        tareas.crearTarea(desc);
        console.log(desc)
            break;
    
        case '2':
            console.log(tareas.listadoArr)
            break;

    }

    // guardarDB(tareas.listadoArr)
    await pausa()


}while (opt !== '0')

}

main();