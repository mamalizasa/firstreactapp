import './App.css';
import React from 'react';
import Header from "./components/Header"
import Main from "./components/Main"
import Interest from "./components/Interest"
import Footer from "./components/Footer"

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Interest />
        <Footer />
      </div>
    )
  }
}

export default App;
