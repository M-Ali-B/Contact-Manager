import React, { Component } from "react";

class Contact extends Component {
  constructor(){
    super();
    this.state={};

    this.onShowClick = this.onShowClick.bind(this);
    
  }

  onShowClick(){

    console.log(this.state);
  }
  
  render() {
    const { name, email, phone } = this.props; //destructuring 

    return (
      <div className="card card-body mb-3">
      <div className="container">
      <h4 >{name} <i  onClick={this.onShowClick} className="fas fa-sort-down"></i></h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>

      </div>
        
      </div>
    );
  }
}



export default Contact;
