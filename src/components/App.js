import { Component } from 'react';
import Header from './Header';
import Form from './Form';

import '../styles/App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {},
      experience: {},
      education: [],
    };

    this.onInfoChange = this.onInfoChange.bind(this);
    this.onExpChange = this.onExpChange.bind(this);
  }

  onInfoChange(e) {
    const { name, value } = e.target;
    const newInfo = this.state.personalInfo;
    newInfo[name] = value;
    this.setState({ personalInfo: newInfo });
  }

  onExpChange(e) {
    const { name, value } = e.target;
    const groupid = e.target.dataset.groupid;
    const newExp = this.state.experience;
    if (!newExp[groupid]) newExp[groupid] = {};
    newExp[groupid][name] = value;
    console.log({ groupid, name, value, newExp})
    this.setState({ experience: newExp });
  }

  render() {
    return (<div className="App">
      <Header />
      <Form
        onInfoChange={this.onInfoChange}
        onExpChange={this.onExpChange}
      />
    </div>
    );
  }
}

export default App;
