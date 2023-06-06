import React, { useState } from "react";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {

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
        <Footer />

      </>
    );
}

export default App;
