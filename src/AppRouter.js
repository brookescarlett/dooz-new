import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home'
import CollectionsContainer from './components/CollectionsContainer'
import ShopContainer from './components/ShopContainer'
import AboutContainer from './components/AboutContainer'
import StoryContainer from './components/StoryContainer'
import AccountContainer from './components/AccountContainer'
import CartContainer from './components/CartContainer'

import Logo from './assets/logos/Dooz_Logos-01-02.png'

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul className="m0 navigation py4 pl3 list-reset flex flex-column fixed top-0 bottom-0 left-0">
          <li class="mb3">
            <Link className="nav-font text-decoration-none white" to="/">
              <img src={Logo} alt="logo" width="140"/>
            </Link>
          </li>
          <li class="mb3">
            <Link className="nav-font text-decoration-none white" to="/collections">collections</Link>
          </li>
          <li class="mb3">
            <Link className="nav-font text-decoration-none white" to="/shop/">shop</Link>
          </li>
          <li class="mb3">
            <Link className="nav-font text-decoration-none white" to="/about/">about</Link>
          </li>
          <li class="mb3">
            <Link className="nav-font text-decoration-none white" to="/stories/">stories</Link>
          </li>
          <li class="mb3">
            <Link className="nav-font text-decoration-none white" to="/stories/">account</Link>
          </li>
          <li class="mb3">
            <Link className="nav-font text-decoration-none white fixed bottom-0 mb4" to="/cart/">cart</Link>
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
);

export default AppRouter;
