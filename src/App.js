import React from 'react';
import Taskinput from './components/Taskinput';
import Tasklist from './components/Tasklist';


function App() {
  return (
    <div className="AppContainer">
      <div className="Header">
        <h1>To-Do Application</h1>
        
      </div>
      <div className="App">
        <div className='container'>
          <h1>Get Things Done!</h1>
        </div>
        <Taskinput />
        <Tasklist />
        
      </div>
    </div>
  );
}

export default App;
