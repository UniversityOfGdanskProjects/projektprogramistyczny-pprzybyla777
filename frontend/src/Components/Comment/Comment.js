import React from "react";
import "./Comment.css";

const Comment = (props) => {
  const { author, title, body, imageUrl, createdAt } = props.comment;

  // const date = new Date(createdAt).toLocaleDateString("en-US", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   hour: "numeric",
  //   minute: "numeric",
  // });

  return (
    <div className="pizza-comment">
      <h4 className="title">{title}</h4>
      <div className="bio">
        <img src={imageUrl} alt={author} />
        <div className="comment-author">{author}</div>
      </div>
      <div className="comment-content">
        <h3 className="comment-message">“{body}”</h3>
        <span>created at:</span>
        <h5>{createdAt}</h5>
      </div>
    </div>
  );
};

export default Comment;
