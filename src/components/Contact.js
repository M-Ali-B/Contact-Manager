import React, {
  Component
} from "react";

class Contact extends Component {
  state = {
    showContactInfo: false

  };

  // this.onShowClick = this.onShowClick.bind(this);



render() {
  const {
    name,
    email,
    phone
  } = this.props; //destructuring 

  const {showContactInfo} = this.state;

  return ( 
    
    <div className = "card card-body mb-3" >
    <div className = "container" >
    < h4 > {
        name
      } < i onClick = {() => this.setState({
          showContactInfo: !this.state.showContactInfo
        })}
    className = "fas fa-sort-down" > </i></h4 >
    {showContactInfo ? (
      <ul className = "list-group" >
        <li className = "list-group-item" > Email: {email} </li> 
        <li className = "list-group-item" > Phone: {phone} </li> </ul >

                        ): null} 
    {/*show contact info or else show null*/} 

    </div>

    </div>
  );
}
};




export default Contact;