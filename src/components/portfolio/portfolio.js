import React, { Component } from 'react'

export default class portfolio extends Component {
render() {
    return (
        <div>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Estos son algunos de mis trabajos.</h1>
              {/* portfolio-wrapper */}
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img alt="buscador" src="images/portfolio/buscador.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Ver mas</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02">
                      <img alt="listado-compras" src="images/portfolio/listadocompras.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Ver mas</h5>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03">
                      <img alt="crud con Firebase" src="images/portfolio/crudfirebase.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Ver más</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04">
                      <img alt="Página Web" src="images/portfolio/smartbyte.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Ver más</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-05">
                      <img alt="React Js" src="images/portfolio/reactjs.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>React Js</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-06">
                      <img alt="Node js" src="images/portfolio/nodejs.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Node js</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-07">
                      <img alt="TA-TE-TI" src="images/portfolio/tateti.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>TA TE TI</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-08" >
                      <img alt="Busca Gifs" src="images/portfolio/buscagifs.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Buscador de Gifs</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
              </div>{" "}
              {/* portfolio-wrapper end */}
            </div>{" "}
            {/* twelve columns end */}
          </div>
        </section>

        <div>
          {/* Modal Popup
        	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/m-buscador.png"
              alt="Busacador de imágenes"
            />
            <div className="description-box">
              <h4>Buscador de imágenes</h4>
              <p>
                Proyecto realizado en React js, que busca imágenes de Pixabay.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                Buscador de imágenes gratuitas
              </span>
            </div>
            <div className="link-box">
              <a href="https://buscador-img.herokuapp.com/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/m-listadocompras.png"
              alt="Listado de Compras"
            />
            <div className="description-box">
              <h4>Lista de compras</h4>
              <p>
                Primer app usando el Framework Vue.Js. Permite realizar y editar un listado de compras y suma la cantidad total de productos comprados.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                Lista de Compras. Practicando Vue.Js
              </span>
            </div>
            <div className="link-box">
              <a href="https://elenagonzalez.github.io/VueJs/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/m-crudfirebase.png"
              alt="Crud Firebase"
            />
            <div className="description-box">
              <h4>Crud con BD Firebase</h4>
              <p>
                Una de las herramientas más destacadas y esenciales de Firebase son las bases de datos en tiempo real. Estas se alojan en la nube.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                Branding
              </span>
            </div>
            <div className="link-box">
              <a href="https://elenagonzalez.github.io/crud-reactjs/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/m-smartbyte.png"
              alt="Página Web"
            />
            <div className="description-box">
              <h4>Página Web</h4>
              <p>
                Página empresarial simple, realizada con Wordpress.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                Sitio web
              </span>
            </div>
            <div className="link-box">
              <a href="https://adminbussiness.000webhostapp.com/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/m-reactjs.png"
              alt="React js"
            />
            <div className="description-box">
              <h4>React Js</h4>
              <p>
                Framework de Javascript del lado del cliente, que permite crear páginas dinámicas y muy rápidas.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                Branding, Webdesign
              </span>
            </div>
            <div className="link-box">
              <a href="https://es.reactjs.org/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/m-nodejs.png"
              alt="react js"
            />
            <div className="description-box">
              <h4>Node js</h4>
              <p>
                Node.js® es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                Node js
              </span>
            </div>
            <div className="link-box">
              <a href="https://nodejs.org/es/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-06 End */}
          <div id="modal-07" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/m-tateti.png"
              alt="Symfony"
            />
            <div className="description-box">
              <h4>TA TE TI</h4>
              <p>
              App para jugar TA TE TI
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                TA TE TI
              </span>
            </div>
            <div className="link-box">
              <a href="https://elenagonzalez.github.io/tateti/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-07 End */}
          <div id="modal-08" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/m-buscagifs.png"
              alt="Base de Datos"
            />
            <div className="description-box">
              <h4>Buscador de Gifs</h4>
              <p>
                Busca Gift desde una API externa.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                Ver
              </span>
            </div>
            <div className="link-box">
              <a href="https://elenagonzalez.github.io/buscadorgifs/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-01 End */}
          {/* row End */}
          {/* Portfolio Section End*/}
        </div>
        </div>
    )}
}
