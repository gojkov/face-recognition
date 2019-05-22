import React from 'react';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
       <Logo />
       {/*<ImageLinkForm />
      <FaceRecognition />*/}
    </div>
  );
}

export default App;
