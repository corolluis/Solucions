//import logo from './logo.svg';
import React from "react";
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menu';
import { PLACES } from './shared/places';
import Greet from './components/greet';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      places: PLACES
    };
  }

  render() {
    return (
      <div className='App'>
        <Navbar color="primary">
          <div className="container" id="brand">
            <NavbarBrand>Catalunya desconeguda</NavbarBrand>
          </div>
        </Navbar>
        <Greet />
        <h1>Llocs insolits de Catalunya</h1>
        <Menu places={this.state.places} />
      </div>
    );
  }
}

export default App;

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
