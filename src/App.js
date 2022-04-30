import './App.css';
import React from "react";
import "./PRISTINA.TTF";
import './App.css';

import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import home from './component/home';
import menu from './component/menu';
import about from './component/about';
import services from './component/services';
import contact from './component/contact';
import Footer from './component/Footer';




function App() {

  var preloader;

  function preload(opacity) {
    if (opacity <= 0) {
      showContent();
    }
    else {
      preloader.style.opacity = opacity;
      window.setTimeout(function () { preload(opacity - 0.09) }, 200);
    }
  }

  function showContent() {
    preloader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
  }

  document.addEventListener("DOMContentLoaded", function () {
    preloader = document.getElementById('preloader');
    preload(1);
  });


  return (
    <>
    <div id="preloader"></div>
    <div className="app" id="content">
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/menu" exact component={menu} />
          <Route path="/about" exact component={about} />
          <Route path="/services" exact component={services} />
          <Route path="/contact" exact component={contact} />

        </Switch>
        <Footer />
      </Router>
    </div>
    </>
  );
}

export default App;
