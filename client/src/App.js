import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';


class App extends Component {

  state = {}

  render() {

    return (
      <div>
        <Header
        />
        <div className='App'>
          {this.props.children}
        </div>
        <Footer
        />
      </div>
    );
  }
}

export default App;