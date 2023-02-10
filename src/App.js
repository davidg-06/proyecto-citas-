import React, { Fragment, useState } from "react";
import { Formulario } from "./component/Formulario";
import { Cita } from "./component/Cita";

function App() {


  //arreglo de citas 

  const [citas, guardarCitas] = useState([]);


//funcion que elimina una cita por su Id 
const eliminarCita=id=>{
  const nuevasCitas =citas.filter(cita=>cita.id  !== id  )
  guardarCitas (nuevasCitas)

}



  //funcion que tome las citas actuales y tome la nueva 

  const crearCita = cita => {

    guardarCitas([...citas,
      cita])
  }



  return (
    <Fragment>

      <h1> Administrador de pacientes </h1>

      <div className="container">

        <div className='row' >

          <div className="one-half column">
            <Formulario
              crearCita={crearCita}

            />
          </div>

          <div className="one-half column">  
          <h2> Administra tu citas</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}

          </div>
        </div>


      </div>

    </Fragment>




  );
}

export default App;
