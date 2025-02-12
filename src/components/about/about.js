import React, { Component } from 'react';

export default class About extends Component{
render(){
    return(
    <div>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/elena.jpeg" alt="Foto" />
          </div>
          <div className="nine columns main-col">
            <h2>Acerca de mi</h2>
            <p>
              Soy apasionada por la tecnología.
              Tengo conocimientos en varios lenguajes de programación como PHP, su Framework Symfony, Javascript )REact js, Next js, Node js, Nest js) y tecnologías de Bases de datos.
              Por varios años trabajé como freelance y trato de continuar capacitándome contínuamente.
              Adquirí conocimientos como Full Stack Developer en Javascript, lenguaje que ha ganado mucha popularidad por permitir desarrollar páginas webs y aplicaciones muy ligeras y capaces de soportar la demanda de miles de usuarios sin que su rendimiento se vea afectado.
            </p>
            <p>
              Autodidacta. Por 4 años me desempeñé como Tech Lead en Henry.</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Datos de Contacto</h2>
                <p className="address">
                 <span>elebeatrizgonzalez@gmail.com</span>
                  <span>
                    <br />
                  </span>
                  <br />
                </p>
              </div>
              <div className="columns download">
                <p>
                <span>Corrientes, Corrientes</span>
                <br />
                <span>Argentina</span>
                </p>
              </div>
            </div>{" "}
          </div>{" "}
        </div>
      </section>{" "}
    </div>
        )
    }
}
