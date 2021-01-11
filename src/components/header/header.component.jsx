import React from "react";

import Logo from "../logo/logo.component";
import SearchBar from "../search-bar/search-bar.component";
import Navigation from "../navigation/navigation.component";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Logo />
    <SearchBar />
    <Navigation />
  </div>
);

export default Header;
