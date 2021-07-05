require('colors');

const { mostrarMenu, pausa } = require('./helpers/mensajes');


console.clear()



const main = async()=>{

await mostrarMenu();
await pausa();

}

main()