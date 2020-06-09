import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//COMPONENTS
import Home from "./components/home";

import Navbar from "./components/navbar";
import Trial from "./components/trial";
import Books from "./components/books";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path="/trial" component={Trial} />
      <Route path="/" component={Home} />
      <Route path="/books" component={Books} />

      </Switch>
    </div>
    </Router>
    );
}

export default App;
