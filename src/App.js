import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//COMPONENTS
import Home from "./components/home";
import Results from "./components/results";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/search-results" component={Results} />

      </Switch>
    </div>
    </Router>
    );
}

export default App;
