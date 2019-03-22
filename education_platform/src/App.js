import React, { Component } from 'react';
import './App.css';
import Section from './Section';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section className="body"/>
        <Footer />
      </div>
    );
  }
}

export default App;
