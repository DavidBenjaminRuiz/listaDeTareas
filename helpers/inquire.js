const inquirer = require('inquirer');
const colors = require('colors')

const preguntas = [

    {
        type: 'list',
        name: 'opt',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear Tarea',
            },
            {
                value: '2',
                name: '2. Listar Tareas',
            },
            {
                value: '3',
                name: '3. Listar Tareas Completadas',
            },
            {
                value: '4',
                name: '4. Listar Tareas Pendientes',
            },
            {
                value: '5',
                name: '5. Completar Tareas',
            },
            {
                value: '6',
                name: '6. Borrar Tarea',
            },
            {
                value: '0',
                name: '0. Salir',
            }
        ]

    }
]

const inquirerMenu = async ()=>{
    
    console.log('========================'.blue)
    console.log('Seleccione una opcion')
    console.log('========================\n'.blue)

    const {opt}= await inquirer.prompt(preguntas)
    console.log(opt)
    return opt;
}

const pausa = async ()=>{
    
    const question= [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter'.blue } para continuar`
        }
    ]

    await inquirer.prompt(question)
}

const leerInput = async (message)=>{

    const question= [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length===0){
                    return 'Por favor ingrese un valor';
                }
                return true;    
            }
        }
    ]
    const {desc}= await inquirer.prompt(question);
    return desc;

}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}