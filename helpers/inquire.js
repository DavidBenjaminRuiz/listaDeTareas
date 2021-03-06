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


const listadoTareasBorrar = async (tareas = [])=>{

    const choices = tareas.map(( tarea,i) => {

        const idx= i+1

        return {
            value: tarea.id,
            name: `${idx}. ${ tarea.desc }`
        }
    })

    choices.unshift({
        value: '0',
        name: '0. Cancelar'

    })

    const preguntas= [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    const {id}= await inquirer.prompt(preguntas)
    return id;

}


const mostarListadoCheckList = async (tareas = [])=>{

    const choices = tareas.map(( tarea,i) => {

        const idx= i+1

        return {
            value: tarea.id,
            name: `${idx}. ${ tarea.desc }`,
            checked: (tarea.completadoEn) ? true : false
        }
    })


    const preguntas= [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]
    const {ids}= await inquirer.prompt(preguntas)
    return ids;

}

const confirmar = async (message)=>{
    
    const question= [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const {ok}= await inquirer.prompt(question)
    return ok;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostarListadoCheckList
}