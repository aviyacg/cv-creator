import { Component } from "react";

class Details extends Component {
  render() {
    const info = this.props.personal[0].info;
    const { address, phoneNumber, email } = info;

    return (
      <div className="Detailes">
        <img src="images/avatar.png" alt="profile"/>
        <div className="title">Contact Detailes</div>
        <div className="sub-title">Address</div>
        <div className="text">{address}</div>
        <div className="sub-title">Phone Number</div>
        <div className="text">{phoneNumber}</div>
        <div className="sub-title">Email</div>
        <div className="text">{email}</div>
      </div>
    );
  }
}

export default Details;