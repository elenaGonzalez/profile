import React, { Component } from 'react';
import Header from './components/header/header.js';
import About from './components/about/about.js';
import Resume from './components/resume/resume.js';
import Portfolio from './components/portfolio/portfolio.js';
import Footer from './components/footer/footer.js';
import './App.css';

class App extends Component {
   state = {
    menu: ['home', 'about', 'resume', 'works', 'contact'],
   }
  render() {
    return (
      <div className="App">
        <Header menu={this.state.menu }/>
        <About />
        <Resume />
        <Portfolio title="CV Elena Gonzalez"/>
        <Footer />
      </div>
    );
  }
}

export default App;
