import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//COMPONENTS
import Home from "./components/home";
import Footer from "./components/footer"
import Navbar from "./components/navbar";
import Trial from "./components/trial";
import Books from "./components/books";
import ThisMonth from "./components/thisMonth";
import Contact from "./components/contact";



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path="/trial" component={Trial} />
      <Route path="/" exact component={Home} />
      <Route path="/books" component={Books} />
      <Route path="/this-month" component={ThisMonth} />
      <Route path="/contact" component={Contact} />

      </Switch>
      <Footer />
    </div>
    </Router>
    );
}

export default App;
