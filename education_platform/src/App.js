import React, { Component } from 'react';
import './App.css';
import Section from './Section';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <div className="body">
          <Header />
          <Section />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
