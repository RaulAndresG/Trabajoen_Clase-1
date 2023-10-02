import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Read from './components/read'; 
import Edit from './components/update'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/read" component={Read} />
          <Route exact path="/edit" component={Edit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


/* 
default function App() {
  return(
    <Router>
      <div className="main">
      <h2>Trabajo de Manejo de API </h2>
      <div style={{marginTop:20}}>
        <Route exact path="/read" component={Read} />
      </div>
      </div>
    </Router>
  )
}  */

//HOLA