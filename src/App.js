import React from 'react'

import VendingMachine from './VendingMachine'
import Pepsi from './Pepsi'
import Cheetos from './Cheetos'
import Reese from './Reese'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Route exact path='/'>
        <VendingMachine />
      </Route> 
      <Route exact path='/pepsi'>
        <Pepsi />
      </Route>
      <Route exact path='/cheetos'>
        <Cheetos />
      </Route>
      <Route exact path='/reese'>
        <Reese />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
