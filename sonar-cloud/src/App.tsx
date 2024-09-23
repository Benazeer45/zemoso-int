import React from 'react';
import './App.css';
import TextDisplay from './components/atoms/Typography'; 

function App() {
  return (
    <div>
      <h1>Hello, SonarCloud!</h1>
      <TextDisplay text="This is a simple text display component." />
    </div>
  );
}

export default App;
