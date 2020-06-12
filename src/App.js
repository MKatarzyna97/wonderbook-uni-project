import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//COMPONENTS
import Home from "./components/home";
import Footer from "./components/footer"
import Navbar from "./components/navbar";
import Trial from "./components/trial";
import Books from "./components/books";
import Friend from "./components/friend";
import Contact from "./components/contact"


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path="/trial" component={Trial} />
      <Route path="/" exact component={Home} />
      <Route path="/books" component={Books} />
      <Route path="/this-month" component={Friend} />
      <Route path="/contact" component={Contact} />

      </Switch>
      <Footer />
    </div>
    </Router>
    );
}

export default App;
