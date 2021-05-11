import React, { useRef, useState } from "react";

import SearchIcon from "@material-ui/icons/Search";

import "./search-bar.styles.scss";

const SearchBar = () => {
  const [inpValue, setInpValue] = useState("");

  const inputRef = useRef();
  const searchIconRef = useRef();

  const handleChange = (event) => {
    setInpValue(event.target.value);
  };

  const handleInputFocus = () => {
    searchIconRef.current.style.left = "5%";
    inputRef.current.placeholder = "";
    inputRef.current.value = inpValue;
  };

  const handleInputBlur = () => {
    searchIconRef.current.style.left = "5%";
    inputRef.current.placeholder = inpValue ? inpValue : "Search";
    if (inpValue) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="search-bar">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        onChange={handleChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <SearchIcon ref={searchIconRef} />
    </div>
  );
};

export default SearchBar;
