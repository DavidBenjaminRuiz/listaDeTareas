require('colors');


const mostrarMenu = ()=>{
    
return new Promise(resolve=>{
    console.log('========================'.blue)
    console.log('Seleccione una opcion')
    console.log('========================\n'.blue)

    console.log(`${'1'.blue}. Crear una tarea`)
    console.log(`${'2'.blue}. Listar las tareas`)
    console.log(`${'3'.blue}. Listar tareas completadas`)
    console.log(`${'4'.blue}. Listar tareas pendientes`)
    console.log(`${'5'.blue}. Completar tarea`)
    console.log(`${'6'.blue}. Borrar tarea`)
    console.log(`${'0'.blue}. Salir\n`)

    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readLine.question('Seleccione una opcion: ', (opt)=>{
        readLine.close()
        console.log(opt)
        resolve(opt);
    })    
})

}

    const pausa = () =>{
        
        return new Promise(resolve=>{


            const readLine = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout,
            });
        
            readLine.question(`Presione ${'ENTER'.blue} para continuar`, (opt)=>{
                readLine.close()
                resolve();
            })


        })

    }
    
module.exports = {
    mostrarMenu,
    pausa
}