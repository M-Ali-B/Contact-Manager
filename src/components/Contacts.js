import React, { Component } from "react";

class Contacts extends Component {
  render() {
    const { name, email, phone } = this.props;

    return (
      <div>
        <h4>{name} </h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contacts.defaultProps = {
name:['ali','bacha'],
email:['ali@','bacha@'],
phone:['0321','0322']

}


export default Contacts;
