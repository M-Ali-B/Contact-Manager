import React, { Component } from "react";

class Contacts extends Component {
  render() {
    const { name, email, phone } = this.props;

    return (
      <div className="card card-body mb-3">
        <h4 >{name} </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

// Contacts.defaultProps = {
// name:['ali','bacha'],
// email:['ali@','bacha@'],
// phone:['0321','0322']

// }


export default Contacts;
