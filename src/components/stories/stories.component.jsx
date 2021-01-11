import React from "react";

import axios from "axios";

import Story from "../story/story.component";

import "./stories.styles.scss";

class Stories extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => {
        return response.data.results.map((user) => ({
          username: user.login.username,
          profilePic: user.picture.large,
        }));
      })
      .then((users) => {
        this.setState({
          users,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          error,
        });
      });
  }

  render() {
    const { isLoading, users } = this.state;

    return (
      <div className="stories">
        {!isLoading ? (
          users.map((user) => <Story key={user.username} user={user} />)
        ) : (
          <p className="stories-loader"></p>
        )}
      </div>
    );
  }
}

export default Stories;
