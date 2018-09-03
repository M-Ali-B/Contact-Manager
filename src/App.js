import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header'
class App extends Component {
  render() {
    return (

<div>
        <Header />
      <Contacts name="Ali" email="ali@gmail.com" phone="0321-xxx-xxxx"/>
      <Contacts name="Bacha" email="bacha@gmail.com" phone="0322-xxx-xxxx"/>
</div>
    );
  }
}

export default App;
