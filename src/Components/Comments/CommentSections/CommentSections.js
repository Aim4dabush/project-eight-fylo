import React from "react";

//data
import { CommentData } from "../../../Data/CommentData";

//style
import "./CommentSections.scss";
import { CommentCard } from "../../../StyledComponents/Card";

function CommentSections() {
  return (
    <div className="comment-container">
      {CommentData.map((comment) => {
        return (
          <CommentCard key={comment.user}>
            <p className="user-comment">{comment.comment}</p>
            <div className="user">
              <img
                className="user-img"
                src={comment.image}
                alt={comment.user}
              />
              <div className="user-title">
                <h3>{comment.user}</h3>
                <h5>{comment.title}</h5>
              </div>
            </div>
          </CommentCard>
        );
      })}
    </div>
  );
}

export default CommentSections;
