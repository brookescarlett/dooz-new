import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from './components/Home'
import CollectionsContainer from './components/CollectionsContainer'
import ShopContainer from './components/ShopContainer'
import AboutContainer from './components/AboutContainer'
import StoryContainer from './components/StoryContainer'
import AccountContainer from './components/AccountContainer'
import CartContainer from './components/CartContainer'

import Logo from './assets/logos/Dooz_Logos-01-02.png'

class AppRouter extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul className="m0 navigation py4 pl3 list-reset flex flex-column fixed top-0 bottom-0 left-0">
              <li className="mb3">
                <NavLink
                  className="nav-font text-decoration-none white"
                  to="/">
                  <img
                    src={Logo}
                    alt="logo"
                    width="90%"
                    className="center" />
                </NavLink>
              </li>
             
              <li className="mb3">
                <NavLink
                  className="nav-font text-decoration-none white"
                  activeClassName="selected"
                  to="/collections">collections
                  </NavLink>
              </li>
              
              <li className="mb3">
                <NavLink
                  className="nav-font text-decoration-none white"
                  to="/shop/">shop</NavLink>
              </li>
              <li className="mb3">
                <NavLink
                  className="nav-font text-decoration-none white"
                  to="/about/">about</NavLink>
              </li>
              <li className="mb3">
                <NavLink
                  className="nav-font text-decoration-none white"
                  to="/stories/">stories</NavLink>
              </li>
              <li className="mb3">
                <NavLink
                  className="nav-font text-decoration-none white"
                  to="/stories/">account</NavLink>
              </li>
              <li className="mb3">
                <NavLink
                  className="nav-font text-decoration-none white fixed bottom-0 mb4"
                  to="/cart/">cart</NavLink>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/collections/" component={CollectionsContainer} />
          <Route path="/shop/" component={ShopContainer} />
          <Route path="/about/" component={AboutContainer} />
          <Route path="/stories/" component={StoryContainer} />
          <Route path="/account/" component={AccountContainer} />
          <Route path="/cart/" component={CartContainer} />
        </div>
      </Router>
    )
  }
 

};

export default AppRouter;
