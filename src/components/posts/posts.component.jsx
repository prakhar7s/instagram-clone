import React from "react";
import Post from "../post/post.component";

import "./posts.styles.scss";

const Posts = () => {
  const posts = [
    {
      postID: 1,
      username: "prakhar7s",
      profilePic: "https://wallpaperaccess.com/full/2213424.jpg",
      postMedia:
        "https://images.unsplash.com/photo-1478001517127-fccc92f54906?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      likesCount: 123,
      commentsCount: 11,
    },
    {
      postID: 2,
      username: "david342",
      profilePic:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      postMedia:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      likesCount: 23,
      commentsCount: 5,
    },
    {
      postID: 3,
      username: "john321",
      profilePic:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      postMedia:
        "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      likesCount: 1223,
      commentsCount: 121,
    },
    {
      postID: 4,
      username: "akash231",
      profilePic:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      postMedia:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=840&q=80",
      likesCount: 163,
      commentsCount: 141,
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.postID} {...post} />
      ))}
    </div>
  );
};

export default Posts;
