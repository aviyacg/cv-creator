import '../styles/App.css';
import Header from './Header';
import Form from './Form';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
