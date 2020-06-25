import React from 'react';
import './App.css';
import './media/Media.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//COMPONENTS
import Home from "./components/home";
import Footer from "./components/footer/footer"
import Navbar from "./components/navbar";
import Books from "./components/books";
import ThisMonth from "./components/This-month/thisMonth"
import Contact from "./components/contact";
import ScrollToTop from "./components/scroll";
import About from "./components/about/about";
import LongMenu from './media/mediaNavbar'



function App() {
  return (
    <Router>
      <ScrollToTop>
    <div className="App">
    <LongMenu />
      <Navbar />
      
      <Switch>
      <Route path="/about" component={About} />
      <Route path="/" exact component={Home} />
      <Route path="/books" component={Books} />
      <Route path="/this-month" component={ThisMonth} />
      <Route path="/contact" component={Contact} />

      </Switch>
      <Footer />
    </div>
    </ScrollToTop>
    </Router>
    );
}

export default App;
