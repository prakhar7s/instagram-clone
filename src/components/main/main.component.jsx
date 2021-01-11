import React from "react";

import Stories from "../stories/stories.component";
import Posts from "../posts/posts.component";

import "./main.styles.scss";

const Main = () => (
  <div className="main">
    <Stories />
    <Posts />
  </div>
);

export default Main;
