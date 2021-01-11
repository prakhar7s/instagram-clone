import React from "react";

import "./story.styles.scss";

const Story = ({ user }) => {
  const { username, profilePic } = user;

  return (
    <div className="story">
      <div className="user-profile-pic">
        <img src={profilePic} alt="profile pic" />
      </div>
      <span className="username">{username}</span>

      <svg className="story-outer-circle">
        <defs>
          <linearGradient id="insta-gradient">
            <stop offset="5%" stopColor="#f09433" />
            <stop offset="95%" stopColor="#bc1888" />
          </linearGradient>
        </defs>

        <circle cx="50%" cy="50%" r="50"></circle>
      </svg>
    </div>
  );
};

export default Story;
