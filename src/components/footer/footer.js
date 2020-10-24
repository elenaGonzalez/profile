import React, { Component } from 'react'

export default class footer extends Component {
render() {
    return (
    <div>
    <footer>
    <div className="row">
    <div className="twelve columns">
      <ul className="social-links">
        <li>
          <a href="https://www.linkedin.com/in/ele-gonzalez/">
            <i className="fa fa-linkedin" />
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>© Copyright 2020</li>
        <li>
          Design by{" Elena Gonzalez "}
        </li>
      </ul>
    </div>
    <div id="go-top">
      <a className="smoothscroll" title="Back to Top" href="#home">
        <i className="icon-up-open" />
      </a>
    </div>
    </div>
    </footer>{" "}
    {/* Footer End*/}
    </div>
)}
}
