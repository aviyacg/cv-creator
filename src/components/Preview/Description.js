import { Component } from "react";

class Description extends Component {
  render() {
    const { description } = this.props;
    return (
      <div className="Description">
        <div className="title">Description</div>
        <div className="text">{description}</div>
      </div>
    );
  }
}

export default Description;