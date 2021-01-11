import React, { useEffect, useRef, useState } from "react";

import "./post.styles.scss";

const Post = ({
  username,
  profilePic,
  postMedia,
  likesCount,
  commentsCount,
}) => {
  const [postText, setPostText] = useState("");

  const postTextRef = useRef();

  const viewMoreRef = useRef();

  useEffect(() => {
    const text = postTextRef.current.innerText;
    setPostText(text);
    if (text.length > 95) {
      postTextRef.current.innerText = `${text.substring(0, 20)}...  `;
      viewMoreRef.current.style.display = "inline";
    } else {
      viewMoreRef.current.style.display = "none";
    }
  }, [postTextRef, viewMoreRef]);

  const viewFullText = () => {
    postTextRef.current.innerText = postText;
    viewMoreRef.current.style.display = "none";
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="profile-picture">
          <img src={profilePic} alt="profile pic" />
        </div>
        <div className="username">{username}</div>
        <svg id="gradient-circle">
          <defs>
            <linearGradient id="insta-gradient">
              <stop offset="5%" stopColor="#f09455" />
              <stop offset="95%" stopColor="#bc1888" />
            </linearGradient>
          </defs>
          <circle cx="50%" cy="50%" r="26"></circle>
        </svg>
      </div>
      <div className="post-media">
        <img src={postMedia} alt="post" />
      </div>
      <div className="post-options">
        <div className="option">
          <svg
            aria-label="Like"
            className="like"
            fill="#262626"
            height="34"
            viewBox="0 0 48 48"
            width="34"
          >
            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
          </svg>
        </div>
        <div className="option">
          <svg
            aria-label="Comment"
            className="comments"
            fill="#262626"
            height="34"
            viewBox="0 0 48 48"
            width="34"
          >
            <path
              clipRule="evenodd"
              d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="option">
          <svg
            aria-label="Share Post"
            className="share"
            fill="#262626"
            height="34"
            viewBox="0 0 48 48"
            width="34"
          >
            <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
          </svg>
        </div>
        <div className="option">
          <svg
            aria-label="Save"
            className="save"
            fill="#262626"
            height="34"
            viewBox="0 0 48 48"
            width="34"
          >
            <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
          </svg>
        </div>
      </div>
      <span className="likes">{likesCount} likes</span>
      <div className="about-post">
        <span className="username">{username}</span>
        <div className="post-text">
          <div className="text" ref={postTextRef}>
            Lorem ipsum dolor sisdsad d sadsa ewere s erwererewr erewrwreddfds
            fds f dsfs sda sdasd adsdssdsd
          </div>
          <button
            className="view-more-button"
            ref={viewMoreRef}
            onClick={viewFullText}
          >
            more
          </button>
        </div>
      </div>

      <div className="post-comments">
        <p>View all {commentsCount} comments</p>
      </div>
      <div className="posted-at">2 HOURS AGO</div>
      <div className="add-a-comment">
        <textarea type="text" placeholder="Add a comment..."></textarea>
        <span>POST</span>
      </div>
    </div>
  );
};

export default Post;
