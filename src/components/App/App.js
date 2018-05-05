import React, { Component } from 'react';
import './App.css';
import Navbars from "../Comone/navbars";
import Navbarx from "../Comone/navbarx";
class App extends Component {
  render() {
    return (
      <div id="App">
       <section>
            {
              this.props.children
            } 
        </section>
      <Navbarx></Navbarx>
      </div>
    );
  }
}

export default App;
