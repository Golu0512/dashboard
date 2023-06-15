import React, { useState } from "react";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
function App() {

  const products = {
    'id': '001',
    'img': './images/med1.jpg',
    'title': 'chemlopro',
    'combination': 'Researchers carry out investigations to find out which diseases are present, why they occur, what can treat or prevent them',
    'discription': 'Researchers carry out investigations to find out which diseases are present, why they occur, what can treat or prevent them, what makes them more likely to happen, and many other aspects of health. Clinical trials are one aspect of clinical research. They aim to find out if a therapy — often a drug — is safe and effective to use when treating a specific condition. The most effective way to demonstrate the effectiveness of a drug or technique is to carry out a double-blind, random, long-term, large clinical human study. In this type of study, researchers compare the effect of a therapy or drug in with either a placebo, no treatment, or another therapy or drug.',
    'indication': 'Researchers carry out investigations to find out which diseases are present, why they occur, what can treat or prevent them',
    'mrp': '120'
  };

    const [mode, setMode] = useState('light');

    const toggleMode = () => {
      if (mode === 'dark') {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        // showAlert('light mode has been enable', 'success');
      } else {
        setMode('dark');
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        // showAlert('dark mode has been enable', 'success');
      }
    };

    return (
      <>

        <Header toggleMode={toggleMode} mode={mode} />
        <Home mode={mode} />
        {/* <ProductPage id={products.id} title={products.title} combination={products.combination} discription={products.discription} indication={products.indication} mrp={products.mrp} img={products.img} /> */}
        <Footer />

      </>
    );
}

export default App;
