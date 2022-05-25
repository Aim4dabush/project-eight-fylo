import React from "react";

//components
import CommentSections from "./CommentSections/CommentSections";

//styles
import "./Comments.scss";

function Comments() {
  return (
    <div className="comments-container">
      <img
        src={process.env.PUBLIC_URL + "/images/profile/bg-quotes.png"}
        alt="quotes"
      />
      <CommentSections />
    </div>
  );
}

export default Comments;
