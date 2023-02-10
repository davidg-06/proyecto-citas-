
import React, {Fragment, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Formulario = ({crearCita}) => {

//Crear state citas 
const [citas, actualizarcitas]=useState ({
    mascota:'',
    propietario:'',
    fecha:'',
    hora:'',
    sintoma:''

})



const [error, actualizarError]=useState (false)

// crear la funcion 

 const actualizar = e =>{
        actualizarcitas({
        ...citas,
        [e.target.name]: e.target.value
    })

    //extraer valores 

   
}

const {mascota,propietario,fecha,hora, sintoma}=citas;
   //cuando el usuario presiona enviar formulario

const submitCita= e => {
    e.preventDefault()





    //validar
    
    if (mascota.trim()=== '' || propietario.trim()=== ''  || fecha.trim()=== ''  
||  hora.trim()=== ''  ||  sintoma.trim()=== '' ) {


        actualizarError (true)
        
        return
       
        
         }

        // Eliminar el mensaje previo 

        actualizarError (false)
    //asignar Id

     citas.id=uuidv4();
    console.log(citas)

    //crear cita

    crearCita(citas)

    //reiniciar form 
}
    

    return (
        <Fragment>

            <h2>Crear Cita</h2>
                 {error ?  <p className='alerta-error'>Todos los campos son obligatorios </p>  : null}
            <form  onSubmit={submitCita}>
                <label>Nombre Mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre Mascota'
                    onChange={actualizar}
                  //  value={mascota}
                />





                <label>Nombre Dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre Dueño'
                    onChange={actualizar}
                  //  value={propietario}
                />



                <label>Fecha de alta </label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={actualizar}
                    //value={fecha}
                />

                <label>Hora </label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={actualizar}
                  //  value={hora}
                />

                <label>Síntomas </label>
                <textarea
                className='u-full-width'
                name='sintoma'
                onChange={actualizar}
              //  value={sintoma}
                > 
                </textarea>

               
                <button
                type='submit'
                className='u-full-width button-primary'
                
                >Agregar Citas</button>

            </form>
        </Fragment>


    )
}
