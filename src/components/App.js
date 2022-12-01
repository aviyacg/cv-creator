import '../styles/App.css';
import Header from './Header';
import Form from './Form/Form';
import Preview from './Preview/Preview';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: [],
      experience: [],
      education: [],
    };

    this.addGroup = this.addGroup.bind(this);
    this.changeInfo = this.changeInfo.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
  }

  addGroup({ sectionName, inputNames, groupId }) {
    // get section
    const section = this.state[sectionName];
    if (section === undefined) return;
    // look for group
    const group = section.find(group => group.id === groupId);
    if (group === undefined) {
      // create group if doesnt exist
      const newInfo = {};
      inputNames.forEach(name => newInfo[name] = '');
      section.push({
        id: groupId,
        info: newInfo,
      });
    }
    this.setState({ [sectionName]: section });
  }

  changeInfo({ sectionName, groupId, name, value }) {
    // get section
    const section = this.state[sectionName];
    if (section === undefined) return;
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
    // update state 
    this.setState({ [sectionName]: section });
  }

  deleteGroup({ sectionName, groupId }) {
    // get section
    const section = this.state[sectionName];
    if (section === undefined) return;
    // get group
    const groupIndex = section.findIndex(group => group.id === groupId);
    if (groupIndex === -1) return;
    // delete group
    section.splice(groupIndex, 1);
    // update state
    this.setState({ [sectionName]: section });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form
          state={this.state}
          addGroup={this.addGroup}
          changeInfo={this.changeInfo}
          deleteGroup={this.deleteGroup}
        />
        <Preview
          state={this.state}
        />
      </div>
    );
  }
}

export default App;
