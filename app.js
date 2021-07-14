const {guardarDB,leerDB} = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostarListadoCheckList } = require('./helpers/inquire');
const Tareas = require('./models/tareas');

require('colors');



const main = async()=>{

    const tareas = new Tareas();
    const tareasDB= leerDB()
    
    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }


do{
    opt= await inquirerMenu();
    switch (opt) {

        case '1':
        const desc = await leerInput('Descripcion: ')
        tareas.crearTarea(desc);
            break;
    
        case '2':
            tareas.listadoCompleto()
            break;
            
            case '3':
            tareas.listarPendientesCompletadas(true)
            break;  
            
            case '4':
            tareas.listarPendientesCompletadas(false)
            break;
            
            case '5':
                const ids= await mostarListadoCheckList(tareas.listadoArr)
                tareas.toggleCompletadas(ids)
            break;
            
            case '6':
            const id = await listadoTareasBorrar(tareas.listadoArr)
            if (id !== '0'){

                const ok= await confirmar('¿Seguro que desea borrar la tarea?')
                if(ok){
                    tareas.borrarTarea(id)
                    console.log("Tarea borrada exitosamente")
                }

            }
            break;

    }

    guardarDB(tareas.listadoArr)
    await pausa()


}while (opt !== '0')

}

main();