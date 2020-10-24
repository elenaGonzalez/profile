import React, { Component } from 'react'

export default class header extends Component {

render() {
    return (
    <div>
      <header id="home">
        <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#" title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
             Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
        </ul>{" "}
          {/* end #nav */}
        </nav>{" "}
        {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Elena Gonzalez.</h1>
            <h3>
              Soy programadora universitaria y  <span>Licenciada en Sistemas</span>, con conocimiento en {" "}
              <span>React Js, </span> PHP, Symfony Framework y <span>desarrollo de sitios webs</span> creando  increíbles
               y visuales sitios para empresas de todos los tamaños en cualquier parte del mundo. Vamos{" "}
              <a className="smoothscroll" href="#about">
                a empezar a desplazarnos{" "}
              </a>
              y leer más{" "}
              <a className="smoothscroll" href="#about">
                sobre mí.
              </a>
            </h3>
            <hr />
            <ul className="social">
              <li>
                <a href="https://www.linkedin.com/in/ele-gonzalez/">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>{" "}
      {/* Header End */}
    </div>
 )}
}
