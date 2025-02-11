import React, { Component } from 'react'

export default class resume extends Component {
render() {
    return (
     <div>
        <section id="resume">
        <div className="row education">
        <div className="three columns header-col">
         <h1>
           <span>Educación</span>
         </h1>
        </div>
        <div className="nine columns main-col">
         <div className="row item">
           <div className="twelve columns">
             <h3>Universidad Nacional del Nordeste</h3>
             <p className="info">
               Programadora Universitaria
                <span>•</span>{" "}
               Licenciada en Sistemas de Información
               <span>•</span>{" "}
             </p>
             <p>
               En el año 2019 presenté mi tesis de Grado y obtuve el título de Licenciada en Sistemas.
               La Universidad Nacional del Nordeste es una institución de gran prestigio en la Región y estoy muy orgullosa de haber egresado de sus aulas.
             </p>
           </div>
         </div>{" "}
         {/* item end */}
         <div className="row item">
           <div className="twelve columns">
             <h3>Soy Henry</h3>
             <p className="info">
               Desarrollo Web Full Stack <span>•</span>{" "}
             </p>
             <p>
               Inspirada en seguir capacitándome, un día me encontré con la gran oportunidad de formar parte de este programa y no dudé en aplicar para poder ser parte del Bootcamp Henry.

               En mi tiempo libre, trato de aplicar mi conocimiento, en proyectos para afianzar conceptos adquiridos.
               Durante 4 años estuve trabajando como Tech Lead en Henry, guiando a que más personas saquen lo mejor de su potencial como desarrolladores.
               </p>
               <p className="info">Actualmente me encuentro buscando nuevas oportunidades laborales</p>
           </div>
         </div>{" "}
         {/* item end */}
        </div>{" "}
        {/* main-col end */}
        </div>
        </section>
    </div>
    )}
}