import React from 'react';
import './App.css';
import image from './images/logo.svg';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import './assets/css/main.css';

function App() {
  return (
    <div>
      <title>Phantom by HTML5 UP</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <link rel="stylesheet" href="./assets/css/main.css" />
      <noscript>&lt;link rel="stylesheet" href="./assets/css/noscript.css" /&gt;</noscript>
      {/* Wrapper */}
      <div id="wrapper">
        {/* Header */}
        <header id="header">
          <div className="inner">
            {/* Logo */}
            <a href="/" className="logo">
              <span className="symbol"><img src={image} alt="" /></span><span className="title">Phantom</span>
            </a>
            {/* Nav */}
            <nav>
              <ul>
                <li><a href="#menu">Menu</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {/* Menu */}
        <nav id="menu">
          <h2>Menu</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </nav>
        {/* Main */}
        <div id="main">
          <div className="inner">
            <header>
              <h1>This is Phantom, a free, fully responsive site<br />
                  template designed by <a href="http://html5up.net">HTML5 UP</a>.</h1>
              <p>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.</p>
            </header>
          </div>
        </div>
        {/* Footer */}
        <footer id="footer">
          <div className="inner">
            <section>
              <h2>Get in touch</h2>
              <form method="post" action="#">
                <div className="fields">
                  <div className="field half">
                    <input type="text" name="name" id="name" placeholder="Name" />
                  </div>
                  <div className="field half">
                    <input type="email" name="email" id="email" placeholder="Email" />
                  </div>
                  <div className="field">
                    <textarea name="message" id="message" placeholder="Message" defaultValue={""} />
                  </div>
                </div>
                <ul className="actions">
                  <li><input type="submit" defaultValue="Send" className="primary" /></li>
                </ul>
              </form>
            </section>
            <section>
              <h2>Follow</h2>
              <ul className="icons">
                <li><a href="#" className="icon brands style2 fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon brands style2 fa-facebook-f"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon brands style2 fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon brands style2 fa-dribbble"><span className="label">Dribbble</span></a></li>
                <li><a href="#" className="icon brands style2 fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon brands style2 fa-500px"><span className="label">500px</span></a></li>
                <li><a href="#" className="icon solid style2 fa-phone"><span className="label">Phone</span></a></li>
                <li><a href="#" className="icon solid style2 fa-envelope"><span className="label">Email</span></a></li>
              </ul>
            </section>
            <ul className="copyright">
              <li>© Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </footer>
      </div>
      {/* Scripts */}
    </div>
  );
};

export default App;
