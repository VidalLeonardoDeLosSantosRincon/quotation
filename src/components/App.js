import React from 'react';

import '../assets/css/App.css';

import Header from "./global/Header";
import Content from "./global/Content";
import Footer from "./global/Footer";

const App = (props)=>{
  const {children} = props;
  return (
    <div className="App">
      <Header/>
      <Content body={children}/>
      <Footer/>
    </div>
  );
}

export default App;
