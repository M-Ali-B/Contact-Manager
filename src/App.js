import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
  render() {
    return (

<div>
        <Header />
      <Contacts name="Ali" email="ali@gmail.com" phone="0321-xxx-xxxx"/>
      <Contacts name="Bacha" email="bacha@gmail.com" phone="0322-xxx-xxxx"/>
      <Contacts name="Hassan" email="hassan@gmail.com" phone="0323-xxx-xxxx"/>
      <Contacts name="Faisal" email="faisal@gmail.com" phone="0323-xxx-xxxx"/>
</div>
    );
  }
}

export default App;
