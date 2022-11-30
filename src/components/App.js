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

  changeInfo({ sectionName, groupId, name, value }) {
    // get section
    const section = this.state[sectionName];
    // get group
    const group = section.find(group => group.id === groupId);
    if (group === undefined) {
      // create group if doesnt exist
      section.push({
        id: groupId,
        info: {[name]: value},
      });
    }
    else {
      // update if group exist
      group.info[name] = value;
    }
    // update section 
    this.setState({[sectionName]: section})
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
