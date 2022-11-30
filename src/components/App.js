import '../styles/App.css';
import Header from './Header';
import Form from './Form';
import { Component } from 'react';
import { v4 as newId } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: [
        {
          id: newId(),
          info: {},
        },
      ],
      experience: [
        {
          id: newId(),
          info: {},
        },
      ],
      education: [
        {
          id: newId(),
          info: {},
        },
      ],
    };
  }

  changeInfo() {

  }

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
