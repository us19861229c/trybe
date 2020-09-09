import React from 'react';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
     {task('oi')}
    </div>
  );
}

export default App;
